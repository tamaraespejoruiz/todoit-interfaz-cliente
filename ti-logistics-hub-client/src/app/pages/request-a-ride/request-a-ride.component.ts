import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
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
      this.router.navigate(['/state-of-a-trip']);
    });
    
  }

}
