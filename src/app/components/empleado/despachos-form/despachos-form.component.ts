import { Component, OnInit } from '@angular/core';
import { Despacho } from 'src/app/models/despacho';
import { DespachoEnvios } from 'src/app/models/despacho-envios';
@Component({
  selector: 'app-despachos-form',
  templateUrl: './despachos-form.component.html',
  styleUrls: ['./despachos-form.component.css']
})
export class DespachosFormComponent implements OnInit {

  titulo:string='Despacho Formulario';
  boton:string='Crear';
  despacho:Despacho = new Despacho();
  despachoEnvio:DespachoEnvios[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addDespachoEnvios():void{
    
  }
}
