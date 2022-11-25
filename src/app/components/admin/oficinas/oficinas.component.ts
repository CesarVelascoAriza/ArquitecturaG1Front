import { Component, OnInit } from '@angular/core';
import { Oficinas } from 'src/app/models/oficinas';
import { OficinasService } from 'src/app/services/oficina/oficinas.service';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  titulo:string='Listado de oficinas';
  listado:Oficinas[]=[];
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]

  constructor(
    private serviceOf:OficinasService
  ) { }

  ngOnInit(): void {
    this.serviceOf.listar().subscribe(listado=> this.listado=listado)
  }
  eliminar(oficina:Oficinas):void{
    
  }

  private calcularRangos() {
    this.serviceOf.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.listado=p.content as Oficinas[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
