import { Component, OnInit } from '@angular/core';
import { Oficinas } from 'src/app/models/oficinas';
import { OficinasService } from 'src/app/services/oficina/oficinas.service';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  titulo:string='Listado de oficinas';
  listado:Oficinas[]=[];

  constructor(
    private serviceOf:OficinasService
  ) { }

  ngOnInit(): void {
    this.serviceOf.listar().subscribe(listado=> this.listado=listado)
  }
  eliminar(oficina:Oficinas):void{
    
  }

}
