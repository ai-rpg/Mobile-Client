import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    // Perform login logic here (e.g., validate credentials)
    // For simplicity, we'll consider it successful if both fields are non-empty
    if (this.username && this.password) {
      // Navigate to the home page or any other desired page after successful login
      this.router.navigate(['/home']);
    } else {
      // Show an error message or perform any other action for failed login
      console.log('Invalid credentials');
    }
  }
}
