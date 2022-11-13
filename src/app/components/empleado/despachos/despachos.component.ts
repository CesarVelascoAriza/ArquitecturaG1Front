import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Despacho } from 'src/app/models/despacho';
import { DespachoService } from 'src/app/services/despachos/despacho.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.css']
})
export class DespachosComponent implements OnInit {

  listaDespachos:Despacho[]=[];
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]

  constructor(
    private service:DespachoService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  eliminar(despacho:Despacho):void{
    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${despacho.id}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.service.eliminar(despacho.id!).subscribe(()=>{
            this.listaDespachos=this.listaDespachos.filter(p=>p !== despacho);
            Swal.fire('Se elimino:', `La Despacho ${despacho.id} con exito !`,'success')
          });          
        }

    })
  }
  private calcularRangos() {
    this.service.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.listaDespachos=p.content as Despacho[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
