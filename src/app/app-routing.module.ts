import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from "./auth/logout/logout.component";
import { ForgotComponent } from './auth/forgot/forgot.component';

const routes: Routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: LogoutComponent },
    { path: 'dashboard', redirectTo: 'dashboard' },
    { path: 'driver', redirectTo: 'driver' },
    { path: 'employee', redirectTo: 'employee' },
    { path: 'country', redirectTo: 'country' },
    { path: 'state', redirectTo: 'state' },
    { path: 'city', redirectTo: 'city' },
    { path: 'license', redirectTo: 'license' },
    { path: 'feedback', redirectTo: 'feedback' },
    { path: 'notification', redirectTo: 'notification' },
    { path: 'content-management', redirectTo: 'content-management' },
    { path: 'meassage-management', redirectTo: 'meassage-management' },
    { path: 'reset-password-admin/:resetToken', component: ForgotComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
