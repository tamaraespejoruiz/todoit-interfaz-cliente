import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
//Calendario -- Fecha
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatIconModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSnackBarModule
  ]
})
export class MaterialModule { }
