import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    // This function will intercept any outgoing HttpRequests sent from the Angular HttpClient.
    // We use this to append the Authorization Header to any outgoing request so we don't
    // have to do that manually for every HttpRequest.
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Retrieve the access token from the browser cache.
        let corsRequest = request.clone({
            headers: request.headers.set('Access-Control-Allow-Origin', '*')
        });

        const currentUser = this.authService.currentUser;
        if (!!currentUser && !!currentUser.token && currentUser.token !== '') {
            let authRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + currentUser.token)
            });
            return next.handle(authRequest);
        } else {
            return next.handle(corsRequest);
        }
    }
}
