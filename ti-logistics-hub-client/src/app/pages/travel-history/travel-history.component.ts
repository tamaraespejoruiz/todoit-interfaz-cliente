import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { StatusTravelService } from 'src/app/services/status-travel.service';
import { Travel } from '../../models/travel';

@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.sass']
})
export class TravelHistoryComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'estadoDelEquipo', 'estadoDelViaje', 'fechaDeEntrega'];

  constructor (private statusTravelService: StatusTravelService) {}

  obtenerNombreStatusTravel(statusTravel: number ): string {
    switch(statusTravel) {
      case 1: return "Pendiente a retirar";
      case 2: return "Retiro asignado";
      case 3: return "Retirado";
      case 4: return "Pendiente de reparación";
      case 5: return "Reparado";
      case 6: return "Entrega asignada";
      case 7: return "Pendiente de entrega";
      case 8: return "Entregado";
      case 9: return "Recibido";
      case 10: return "Renunciado";
    }
    return "";
  }

  obtenerNombreEstadoEquipo(estado: number): string {
    switch(estado) {
      case 5:
      case 6: 
      case 7: 
      case 8: 
        return "Reparado";
      case 1: 
      case 2: 
      case 3:
      case 4:
      case 9:
      case 10:
        return "A reparar";
    }
    return "";
  }
  dataSource = new MatTableDataSource<Travel>();
  ngOnInit(): void {
    this.statusTravelService.verEstadoViaje().subscribe(resp => {
      this.dataSource.data = resp;
    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

