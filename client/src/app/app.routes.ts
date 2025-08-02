import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Signup } from './signup/signup';
import { AuthGuard } from './util/guards/auth-guard';
import { Home } from './home/home';
import { ScheduleTrips } from './schedule-trips/schedule-trips';
import { DriverManagement } from './driver-management/driver-management';
import { Profile } from './profile/profile';
import { Rewards } from './rewards/rewards';

export const routes: Routes = [
  { path: 'Login', component: Login },
  { path: 'Signup', component: Signup },
  {
    path: 'Dashboard',
    component: Dashboard,
    children: [
        {path: 'Home', component: Home},
        {path: 'Plan-Trips', component: ScheduleTrips},
        {path: 'Driver-Managament', component: DriverManagement},
        {path: 'Profile', component: Profile},
        {path: 'Rewards', component: Rewards},
        {path: '**', component: NotFound},
        {path: '', redirectTo: '/Dashboard/Home', pathMatch: 'full'}
    ]/*, canActivate: [AuthGuard]*/,
  },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
