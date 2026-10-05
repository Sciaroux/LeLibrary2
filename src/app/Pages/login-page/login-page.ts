import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../Services/users-service';
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
  Check() {
    this.message = '';
    const result = this.usersService.login(this.loginData().username(), this.loginData().password());
    if (result) {
      this.router.navigateByUrl('panel');
    }
    else {
      this.message = 'Invalid username/password';
    }
  }

  message = '';
  loginData: WritableSignal<LoginModel> = signal({
    RememberMe: false,
    username: signal(''),
    password: signal('')
  });
  isValid = computed(() => this.loginData().username() != '' && this.loginData().password() != '');
}
export interface LoginModel {
  username: WritableSignal<string>;
  password: WritableSignal<string>;
  RememberMe: boolean;
}