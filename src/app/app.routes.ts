import { Routes } from '@angular/router';
import { LoginPage } from './Pages/login-page/login-page';
import { DashboardPage } from './Pages/panel/dashboard-page/dashboard-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'panel', component: DashboardPage },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
