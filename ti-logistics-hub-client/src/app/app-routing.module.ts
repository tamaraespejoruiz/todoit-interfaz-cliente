import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestARideComponent } from './pages/request-a-ride/request-a-ride.component';
import { StateOfATripComponent } from './pages/state-of-a-trip/state-of-a-trip.component';
import { TravelHistoryComponent} from './pages/travel-history/travel-history.component';
import { GuardsGuard } from './guards.guard';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent 
  }, 
  {
    path: 'register', 
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'request-a-ride',
    canActivate: [GuardsGuard],
    component: RequestARideComponent
  }, 
  {
    path: 'state-of-a-trip',
    canActivate: [GuardsGuard],
    component: StateOfATripComponent 
  },
  {
    path: 'travel-history',
    canActivate: [GuardsGuard],
    component: TravelHistoryComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
