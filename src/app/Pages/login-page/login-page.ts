import { Component, computed, inject, model, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../Services/users-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { form, FormField, FormRoot, minLength, pattern, required } from '@angular/forms/signals';

@Component({
  imports: [FormsModule, FormField, FormRoot],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  usersService = inject(UsersService);
  router = inject(Router);
  Check() {
    this.message = '';
    const result = this.usersService.login(this.loginData().username, this.loginData().password);
    if (result) {
      this.router.navigateByUrl('panel');
    }
    else {
      this.message = 'Invalid username/password';
    }
  }
  message = '';
  loginData=signal<LoginModel>({
    RememberMe: false,
    username: '',
    password: ''
  });
  loginForm = form(this.loginData,(data)=>{
    minLength(data.username,3,{message:'Username must be at least 3 letters'});
    required(data.username,{message:'Username is required'});
    minLength(data.password,5,{message:'Password must be at least 5 letters long'});
    required(data.password,{message:'Password is required'});
    // pattern(data.password,/[a-zA-Z0-9]+$/,{message:'Password requires complexity'});
  });
}
export interface LoginModel {
  username: string;
  password: string;
  RememberMe: boolean;
}