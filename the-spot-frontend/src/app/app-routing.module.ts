import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RatePlaceComponent } from './rate-place/rate-place.component';
import { LandmarkDescriptionComponent } from './landmark-description/landmark-description.component';
import { MikeHousePartyDescriptionComponent } from './mike-house-party-description/mike-house-party-description.component';
import { CodefestDescriptionComponent } from './codefest-description/codefest-description.component';
import { SiteMapComponent } from './site-map/site-map.component';


const routes: Routes = [
    {path: '', component: LoginScreenComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'signup', component: SignupScreenComponent},
    {path: 'rate', component: RatePlaceComponent},
    {path: 'landmark', component: LandmarkDescriptionComponent},
    {path: 'mike', component: MikeHousePartyDescriptionComponent},
    {path: 'codefest', component: CodefestDescriptionComponent},
    {path: 'siteMap', component: SiteMapComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
