import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component'
import { LoginScreenComponent } from './login-screen/login-screen.component'

const routes: Routes = [
    {path: '', component: LoginScreenComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'signup', component: SignupScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
