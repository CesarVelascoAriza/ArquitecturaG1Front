import { Component, OnInit } from '@angular/core';
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
  constructor(
    private servicio:VehiculoService
  ) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(data=> this.listaVehiculos=data)
  }

  eliminar(vehiculo:Vehiculo):void{
   
    this.servicio.eliminar(vehiculo.id as number).subscribe(data=>{
      
      console.log(data)
    })
  }
}
