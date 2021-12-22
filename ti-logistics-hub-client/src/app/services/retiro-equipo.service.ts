import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';


@Injectable({
    providedIn: 'root'
})
export class RetiroEquipoService {

    constructor(private http: HttpClient) { }

    retirarEquipo(equipo: Equipo): Observable<Equipo> {
        return this.http.post<Equipo>(`api/Retirement?clientId=${equipo.idClient}&mark=${equipo.marca}&model=${equipo.modelo}&failure=${equipo.falla}`, equipo);
    }
      
}