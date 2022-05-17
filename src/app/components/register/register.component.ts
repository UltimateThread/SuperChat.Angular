import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    retypePassword: new FormControl('')
  });
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.errorObservable.subscribe((error) => {
      this.error = error;
    });

    this.authService.authenticatedObservable.subscribe((authenticated) => {
      if (authenticated === true) {
        this.router.navigate(['']);
      }
    })
  }

  submit(): void {
    if (this.form.value.firstName === '') {
      this.error = 'Missing First Name';
      return;
    }

    if (this.form.value.lastName === '') {
      this.error = 'Missing Last Name';
      return;
    }

    if (this.form.value.email === '') {
      this.error = 'Missing Email';
      return;
    }

    if (this.form.value.password === '') {
      this.error = 'Missing Password';
      return;
    }

    if (this.form.value.retypePassword === '') {
      this.error = 'Missing Retype Password';
      return;
    }

    if (this.form.value.password !== this.form.value.retypePassword) {
      this.error = 'Passwords Do Not Match';
      return;
    }

    if (this.form.valid) {
      this.authService.register(this.form.value.firstName, this.form.value.lastName, this.form.value.email, this.form.value.password).subscribe();
    }
  }
}
