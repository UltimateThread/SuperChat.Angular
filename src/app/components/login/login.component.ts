import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.value.email === '') {
      this.error = 'Missing Email';
      return;
    }

    if (this.form.value.password === '') {
      this.error = 'Missing Password';
      return;
    }

    if (this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password).subscribe();
    }
  }

  showRegister() {
    this.router.navigate(['register']);
  }
}
