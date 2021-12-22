import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    HeaderLandingComponent,
    FooterLandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatMenuModule
  ], 
  exports: [
    HeaderLandingComponent,
    FooterLandingComponent
  ]
})
export class ComponentsModule { }
