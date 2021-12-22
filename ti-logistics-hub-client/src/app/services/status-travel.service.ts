import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Travel } from '../models/travel';


@Injectable({
    providedIn: 'root'
})

export class StatusTravelService {

    constructor(private http: HttpClient) { }

    verEstadoViaje() {
        return  this.http.get<Travel[]>(`api/Equipment?clientId=${localStorage.getItem('idUsuario')}`);
    }
}