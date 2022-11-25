import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Tarifas } from 'src/app/models/tarifas';
import { TarifaService } from 'src/app/services/tarifas/tarifa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  title:string='Formularios tarifas';
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]
  listado:Tarifas[]=[];

  constructor(
    private service:TarifaService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }
  eliminar(tarifa:Tarifas):void{

    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${tarifa.id}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.service.eliminar(tarifa.id).subscribe(()=>{
            this.listado=this.listado.filter(p=>p !== tarifa);
            Swal.fire('Se elimino:', `La Categoria ${tarifa.id} con exito !`,'success')
          });          
        }

    })
  }

  private calcularRangos() {
    this.service.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.listado=p.content as Tarifas[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
