import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuarios []=  [];
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOpions:number[] =[5,10,25,100]
  constructor(
    private servUsu:UsuarioService
  ) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  eliminar(usuario:Usuarios):void{
    Swal.fire({
      title:'Alerta',
      text:`Seguro de eliminar a ${usuario.nombre}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Deseo eliminarlo !'
    }).then((result)=>{
        if (result.isConfirmed) {
          this.servUsu.eliminar(usuario.numeroDocumento!).subscribe(()=>{
            this.usuarios=this.usuarios.filter(p=>p !== usuario);
            Swal.fire('Se elimino:', `El Usuario ${usuario.nombre} con exito !`,'success')
          });          
        }

    })
  }
  private calcularRangos() {
    this.servUsu.listarPorPagina(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(p=>{
      this.usuarios=p.content as Usuarios[]
      this.totalRegistros =p.totalElements as number;
    })
  }
  paginar(event:PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina= event.pageSize;
    this.calcularRangos();
  }

}
