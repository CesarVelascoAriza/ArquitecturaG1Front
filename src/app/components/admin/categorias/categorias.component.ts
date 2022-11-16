import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Categoria=new Categoria();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]
  lista:Categoria[]=[];
  constructor(
    private service:CategoriaService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  eliminar(categoria:Categoria):void{
    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${categoria.nombre}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.service.eliminar(categoria.id!).subscribe(()=>{
            this.lista=this.lista.filter(p=>p !== categoria);
            Swal.fire('Se elimino:', `La Categoria ${categoria.nombre} con exito !`,'success')
          });          
        }

    })
  }
  private calcularRangos() {
    this.service.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.lista=p.content as Categoria[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }
}
