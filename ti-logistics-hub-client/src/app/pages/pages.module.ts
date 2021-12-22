import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RequestARideComponent } from './request-a-ride/request-a-ride.component';
import { StateOfATripComponent } from './state-of-a-trip/state-of-a-trip.component';
import { TravelHistoryComponent } from './travel-history/travel-history.component';

import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    RequestARideComponent,
    StateOfATripComponent,
    TravelHistoryComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    MaterialModule,
    MatButtonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule, 
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    RequestARideComponent,
    StateOfATripComponent,
    TravelHistoryComponent    
  ]
})
export class PagesModule { }
