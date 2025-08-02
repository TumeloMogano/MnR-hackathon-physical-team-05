import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Signup } from './signup/signup';
import { AuthGuard } from './util/guards/auth-guard';

export const routes: Routes = [
    {path: 'Login', component: Login },
    {path: 'Signup', component: Signup },
    {path: 'Dashboard', component: Dashboard, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/Login', pathMatch: 'full'},
    {path: '**', component: NotFound}
];
