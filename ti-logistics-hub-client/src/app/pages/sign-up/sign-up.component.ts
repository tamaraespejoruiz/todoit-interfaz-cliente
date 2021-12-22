import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';

import { SignUpService } from '../../services/sign-up.service';
import { Registrado } from 'src/app/models/registrado';
import { Rol } from 'src/app/models/rol';
import { FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit{

  hide = true;

  formulario = new FormGroup ({ 
    nombre:  new FormControl('', Validators.pattern(/^[^0-9]+$/)), 
    apellido: new FormControl(''), 
    email: new FormControl('', Validators.email), 
    contraseña : new FormControl(''),  
    direccion : new FormControl(''),
    telefono : new FormControl('', Validators.pattern(/^\d+$/)) 
  })

  onSubmit(formDirective: FormGroupDirective) {
    console.warn(this.formulario.value)
    this.signUp();
    formDirective.resetForm();
    this.formulario.reset();
  }

  constructor(private signUpService: SignUpService) {}
  ngOnInit(): void {
    this.getAllClients();
  }

  administrador: Rol = {
    name: 'Administrado'
  };

  signUp() {
    const registrado = this.getUsuarioFromFormulario();
  }

  getAllClients() {
    this.signUpService.getAll().subscribe((resp) => {
    });
  }

  getUsuarioFromFormulario():Registrado {
    const nombre= this.formulario.get("nombre")?.value;
    const apellido = this.formulario.get("apellido")?.value;

    const registrado: Registrado = {
      fullName: nombre + " " + apellido,
      email: this.formulario.get("email")?.value,
      password: this.formulario.get("contraseña")?.value,
      address: this.formulario.get("direccion")?.value,
      cellPhone: this.formulario.get("telefono")?.value,
      observations: '',
      vehicle: '',
      rol: this.administrador
    };

    return registrado;
  }

}