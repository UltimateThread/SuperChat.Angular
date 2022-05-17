import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, interval, map, Observable, Subject, takeWhile, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterDTO, User, UserDTO } from '../models/chat-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: Boolean = false;
  authenticatedObservable = new Subject<Boolean>();
  currentUser: User;
  currentUserObservable = new Subject<User>();
  error: string = '';
  errorObservable = new Subject<string>();

  constructor(private httpClient: HttpClient, private router: Router) {
    let currentUserString = localStorage.getItem('currentUser');
    if (!!currentUserString) {
      this.currentUser = JSON.parse(currentUserString);

      this.currentUserObservable.next(this.currentUser);

      this.authenticated = true;
      this.authenticatedObservable.next(this.authenticated);

      this.router.navigate(['']);
    }
  }

  login(email: string, password: string) {
    const userDTO: UserDTO = {
      email: email,
      firstName: '',
      lastName: '',
      password: password,
      jwtToken: ''
    }

    return this.httpClient.post<any>(`${environment.superChatAPI}/api/Auth/login`, userDTO)
      .pipe(map((user) => {
        if (!!user) {
          this.currentUser = {
            id: '',
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: user.jwtToken
          };
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.currentUserObservable.next(this.currentUser);

          this.authenticated = true;
          this.authenticatedObservable.next(this.authenticated);

          this.router.navigate(['']);
        } else {
          this.authenticated = false;
          this.authenticatedObservable.next(this.authenticated);
        }
      }), catchError((error) => {
        const errorMessage = this.handleErrorMessage(error);

        this.error = errorMessage;

        return throwError(() => {
          return errorMessage;
        });
      }));
  }

  register(firstName: string, lastName: string, email: string, password: string) {
    const registerDTO: RegisterDTO = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };

    return this.httpClient.post<any>(`${environment.superChatAPI}/api/Auth/register`, registerDTO)
      .pipe(map((userDTO: UserDTO) => {
        if (!!userDTO) {
          this.currentUser = {
            id: '',
            firstName: userDTO.firstName,
            lastName: userDTO.lastName,
            email: userDTO.email,
            token: userDTO.jwtToken
          };
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.currentUserObservable.next(this.currentUser);

          this.authenticated = true;
          this.authenticatedObservable.next(this.authenticated);
        } else {
          this.authenticated = false;
          this.authenticatedObservable.next(this.authenticated);
        }
      }), catchError((error) => {
        const errorMessage = this.handleErrorMessage(error);

        this.error = errorMessage;

        return throwError(() => {
          return errorMessage;
        });
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.authenticated = false;
    this.authenticatedObservable.next(this.authenticated);
  }

  handleErrorMessage(error: any): string {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `${error.error.message}`;
    } else {
      // server-side error
      if (!!error.error) {
        errorMessage = error.error;
      } else {
        errorMessage = `Network Error. Please Try Again Later.`;
      }
    }

    return errorMessage;
  }
}
