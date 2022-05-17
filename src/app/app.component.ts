import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'super-chat';
  authenticated = false;

  constructor(private authService: AuthService) {
    console.log('Test');
  }

  ngOnInit(): void {
    this.authService.authenticatedObservable.subscribe((authenticated) => {
      console.log(authenticated);
    });
  }
}
