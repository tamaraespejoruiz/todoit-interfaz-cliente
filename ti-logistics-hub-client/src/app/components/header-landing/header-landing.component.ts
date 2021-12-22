import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.sass']
})
export class HeaderLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  estaLoggeado():boolean {
    const usuario = localStorage.getItem('userLogeado');
    if (usuario) 
      return true;
    return false;
  }

  cerrarSesion():void {
    localStorage.removeItem('userLogeado');
    this.router.navigate(['/home']);
  }

}
