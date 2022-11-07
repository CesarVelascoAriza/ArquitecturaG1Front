import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  listaVehiculos:Vehiculo[]=[]
  vehiculo:Vehiculo= new Vehiculo();
  constructor() { }

  ngOnInit(): void {
  }

}
