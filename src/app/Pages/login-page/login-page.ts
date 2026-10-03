import { Component, inject } from '@angular/core';
import { UsersService } from '../../Services/users-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  usersService = inject(UsersService);
  router = inject(Router);
  loginData: LoginModel = {
    RememberMe: false,
    username: '',
    password: ''
  };
}
export interface LoginModel {
  username: string;
  password: string;
  RememberMe: boolean;
}