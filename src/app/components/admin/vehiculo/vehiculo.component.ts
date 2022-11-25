import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  listaVehiculos:Vehiculo[]=[]
  vehiculo:Vehiculo= new Vehiculo();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]

  constructor(
    private servicio:VehiculoService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  eliminar(vehiculo:Vehiculo):void{
   
    this.servicio.eliminar(vehiculo.id as number).subscribe(data=>{
      
      console.log(data)
    })
  }
  private calcularRangos() {
    this.servicio.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.listaVehiculos=p.content as Vehiculo[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
