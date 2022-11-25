import { Component, OnInit } from '@angular/core';
import { Envios } from 'src/app/models/envios';
import { EnvioService } from 'src/app/services/envios/envio.service';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html'
})
export class EnviosComponent implements OnInit {

  lista:Envios[]=[];
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]

  constructor(
    private service:EnvioService
  ) 
  { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    //this.service.listar().subscribe(data=> this.lista=data);
    this.calcularRangos();
  }

  private calcularRangos() {
    this.service.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.lista=p.content as Envios[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }

  eliminar(envio:Envios):void{
    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${envio.id}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.service.eliminar(envio.id!).subscribe(()=>{
            this.lista=this.lista.filter(p=>p !== envio);
            Swal.fire('Se elimino:', `el envio ${envio.id} con exito !`,'success')
          });          
        }

    })
  }
}

