import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  listTipoDocmento: TipoDocumento[] = [];
  usuario: Usuarios = new Usuarios();
  
  formUsuario = this.formBuilder.group({
    tipo: [this.usuario.tipo, Validators.required],
    documento: [this.usuario.numeroDocumento, Validators.required],
    nombre: [this.usuario.nombre, Validators.required],
    apellido: [this.usuario.apellido, Validators.required],
    dir: [this.usuario.direccion, Validators.required],
    email: [this.usuario.correo, Validators.required],
    tel: [this.usuario.telefono, Validators.required],
    usuario: [this.usuario.usuario, Validators.required],
    contra: [this.usuario.contrasenia, Validators.required]
  });

  constructor(
    
    private formBuilder: FormBuilder,
  ) 
  { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
