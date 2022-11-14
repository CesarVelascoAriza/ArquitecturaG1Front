import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  titulo:string='Crear Usuario';
  usuario:Usuarios = new Usuarios();
  roles:Roles[]=[{id:1,nombreRol:'USUARIO'},{id:1,nombreRol:'EMPLEADO'},{id:1,nombreRol:'ADMIN'}]
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
