import { Component, computed, inject, model, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../Services/users-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormsModule, FormField],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  usersService = inject(UsersService);
  router = inject(Router);
  Check(event: any) {
    event.PreventDefault();
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
  loginForm = form(this.loginData, {
    submission: {
      action: async () => {
        console.log('now');
      }
    }
  });
  isValid = computed(() => this.loginData().username() != '' && this.loginData().password() != '');
}
export interface LoginModel {
  username: string;
  password: string;
  RememberMe: boolean;
}