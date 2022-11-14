import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { Usuarios } from 'src/app/models/usuarios';
import { TiposDocumentosService } from 'src/app/services/tipos/tipos-documentos.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  titulo:string='Crear Usuario';
  boton:string='Crear'
  usuario:Usuarios = new Usuarios();
  roles:Roles[]=[{id:1,nombreRol:'USUARIO'},{id:1,nombreRol:'EMPLEADO'},{id:1,nombreRol:'ADMIN'}]
  tipodeDocumento:TipoDocumento[]=[];

  constructor(
    private service:UsuarioService,
    private tiposDocService:TiposDocumentosService, 
    private router: Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.tiposDocService.listar().subscribe((tipos)=> this.tipodeDocumento = tipos);
  }
  crear():void{
    this.service.crear(this.usuario).subscribe((usuarios)=>{
      Swal.fire('Nuevo:',`alert Usuario nombre ${usuarios.nombre} creado con exito!`,'success');
      this.router.navigate(['/admin/usuario']);
    })
  }
  actualizar():void{
    this.service.actualizar(this.usuario).subscribe((usuarios)=>{
      Swal.fire('Modificado:',`alert Usuario nombre ${usuarios.nombre} Modificado con exito!`,'success');
      this.router.navigate(['/admin/usuario']);
    })
  }
  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.titulo= 'Editar Usuario';
        this.boton='actualizar'
        this.service.ver(id).subscribe((usuarios)=> this.usuario= usuarios);
      }
    })
  }
}
