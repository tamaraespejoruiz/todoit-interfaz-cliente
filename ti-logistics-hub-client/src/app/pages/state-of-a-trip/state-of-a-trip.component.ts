import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/models/travel';
import { StatusTravelService } from '../../services/status-travel.service';


@Component({
  selector: 'app-state-of-a-trip',
  templateUrl: './state-of-a-trip.component.html',
  styleUrls: ['./state-of-a-trip.component.sass']
})

export class StateOfATripComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'estadoDelEquipo', 'estadoDelViaje'];

  constructor (private statusTravelService: StatusTravelService) { }

  obtenerNombreStatusTravel(statusTravel: number ): string {
    switch (statusTravel) {
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
    console.log(this.paginator);
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
