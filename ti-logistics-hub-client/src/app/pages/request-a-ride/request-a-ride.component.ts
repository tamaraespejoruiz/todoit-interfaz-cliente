import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RetiroEquipoService } from '../../services/retiro-equipo.service';
import { Router} from '@angular/router';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-request-a-ride',
  templateUrl: './request-a-ride.component.html',
  styleUrls: ['./request-a-ride.component.sass']
})
export class RequestARideComponent {

  equipo = new Equipo('');
  formularioRetiroEquipo: FormGroup;
  idClient = JSON.parse(localStorage.getItem('idUsuario')||'')


  constructor (private retiroEquipoService: RetiroEquipoService, 
               private router: Router) {
    this.formularioRetiroEquipo = new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      falla: new FormControl('')
    })
  }

  onSubmit(formDirective: FormGroupDirective) {

    this.equipo = this.formularioRetiroEquipo.value;
    this.equipo.idClient = this.idClient;
    
    formDirective.resetForm();
    this.formularioRetiroEquipo.reset();

    this.retiroEquipoService.retirarEquipo(this.equipo).subscribe( resp => {
      localStorage.setItem('retiroEquipo', JSON.stringify(this.equipo));
      console.log('retiroEquipo');
      console.log(resp);
      this.router.navigate(['/state-of-a-trip']);
      
    });
    
  }

    // QUIERO HACER UNA FUNCION QUE EN UNA PARTE 
    // SOLICITE REPATACION QUE EN ELLA TENGA LA ID_USUARAIO Y DEVUEVLA 
    // EL RETURN DEL Equipo

    // OTRA FUNCION QUE SE LLAME OBTENER EQUIPODECLIENTE 
    // QUE OBTENGA EL ID USUARIO
}







































  // equipo: Equipo = {
  //   idCliente: 2,
  //   marca: '', 
  //   modelo: '', 
  //   falla: '', 
  // }
  // formularioRetiroEquipo = new FormGroup ({
  //   idCliente: new FormControl(''),
  //   marca : new FormControl(''), 
  //   modelo: new FormControl(''), // Ver si el modelo recibe letras.
  //   falla: new FormControl(''), 
  // })

  // constructor(
  //   private retiroEquipoService: RetiroEquipoService,
  //   private router: Router,
  // ) { }  
  


  // onSubmit(formDirective: FormGroupDirective){ 
  //   this.equipo = this.formularioRetiroEquipo.value;

   
  //   formDirective.resetForm();
  //   this.formularioRetiroEquipo.reset();


  //   this.retiroEquipoService.retirarEquipo(this.equipo.marca, 
  //     this.equipo.modelo, this.equipo.falla).subscribe (resp => {
  //       const id = JSON.parse(localStorage.getItem('userLogeado')||'');
  //       const equipo: Equipo = {
  //         idCliente: id,
  //         marca: this.formularioRetiroEquipo.get("marca")?.value, 
  //         modelo: this.formularioRetiroEquipo.get("modelo")?.value, 
  //         falla: this.formularioRetiroEquipo.get("falla")?.value, 
  //       }

  //     })
  // }

