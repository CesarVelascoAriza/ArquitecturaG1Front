import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';
import Swal from 'sweetalert2';

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
   
    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${vehiculo.placa}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.servicio.eliminar(vehiculo.id as number).subscribe(data=>{
            this.listaVehiculos=this.listaVehiculos.filter(p=>p !== vehiculo);
            Swal.fire('Se elimino:', `La Categoria ${vehiculo.placa} con exito !`,'success')
          })       
        }

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
