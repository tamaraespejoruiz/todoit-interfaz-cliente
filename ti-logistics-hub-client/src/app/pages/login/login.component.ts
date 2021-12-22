import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( 
              private loginserviceService: LoginserviceService,
              private router: Router
              ) { }

  user:Usuario = {
    email:'',
    password:'',
  };

  ngOnInit(): void {
  }

  hide = true;
  formularioLogin = new FormGroup ({
    email: new FormControl('', Validators.email), 
    password : new FormControl('') 
  })


  onSubmit(formDirective: FormGroupDirective) {
    this.user = this.formularioLogin.value;
    this.loginserviceService.login(this.user.email, this.user.password).subscribe(  (resp:any) => {
      localStorage.setItem('userLogeado', JSON.stringify(this.user.email));
      localStorage.setItem('idUsuario', JSON.stringify(resp.id));
      localStorage.setItem('idRolUsuario', JSON.stringify(resp.rol.id));
      
      this.router.navigate(['/request-a-ride']);
    }, error => {
      console.log(error);
    })    

    formDirective.resetForm();
    this.formularioLogin.reset();
  }
  
}
