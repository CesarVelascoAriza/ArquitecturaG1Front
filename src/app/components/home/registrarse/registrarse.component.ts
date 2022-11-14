import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  listTipoDocmento: TipoDocumento[] = [];
  usuario: Usuarios = new Usuarios();
  error:any
  
  formUsuario = this.formBuilder.group({
    tipo: [this.usuario.tipo, Validators.required],
    documento: [this.usuario.numeroDocumento, Validators.required],
    nombre: [this.usuario.nombre, Validators.required],
    apellido: [this.usuario.apellido, Validators.required],
    dir: [this.usuario.direccion, Validators.required],
    email: [this.usuario.correo, Validators.required],
    tel: [this.usuario.telefono, Validators.required],
    usuario: [this.usuario.usuario, Validators.required],
    contra: [this.usuario.password, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService:UsuarioService
  ) 
  { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  onSubmit(){
    let tipo : TipoDocumento = new TipoDocumento();
    tipo.id=Number(this.formUsuario.get('tipo')?.value)
    this.usuario.numeroDocumento = Number(this.formUsuario.get('documento')?.value);
    this.usuario.nombre = this.formUsuario.get('nombre')?.value!
    this.usuario.apellido = this.formUsuario.get('apellido')?.value!
    this.usuario.correo = this.formUsuario.get('email')?.value!
    this.usuario.direccion = this.formUsuario.get('dir')?.value!
    this.usuario.telefono = this.formUsuario.get('tel')?.value!
    this.usuario.tipo = tipo;
    this.usuario.usuario = this.formUsuario.get('usuario')?.value!
    this.usuario.password = this.formUsuario.get('contra')?.value!

    this.userService.crear(this.usuario).subscribe(data => {
      this.formUsuario.reset();
    }, err => {
      this.error =err
    });
  }
}
