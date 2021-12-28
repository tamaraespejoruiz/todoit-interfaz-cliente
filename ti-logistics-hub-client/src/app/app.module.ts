import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { LoginserviceService } from './services/loginservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
