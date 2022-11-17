import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Estado } from 'src/app/models/estado';
import { EstadoService } from 'src/app/services/estado/estado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  listEstado : Estado[]=[];
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]
  constructor(
    private estadoServ: EstadoService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  eliminar(estado:Estado):void{
    if(confirm("seguro de eliminar el estado")){
      Swal.fire({
        title:'Alerta',
        text:`Seguro de eliminar a ${estado.estado}?`,
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Si, Deseo eliminarlo !'
      }).then((result)=>{
          if (result.isConfirmed) {
            this.estadoServ.eliminar(estado.id).subscribe(() => {
              this.listEstado =this.listEstado.filter(p => p != estado);
              Swal.fire('Se elimino:', `La Categoria ${estado.estado} con exito !`,'success')
            });        
          }
  
      })
    }
  }
  private calcularRangos() {
    this.estadoServ.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.listEstado=p.content as Estado[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
