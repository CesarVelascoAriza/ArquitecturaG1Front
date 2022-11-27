import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/usuarios/oauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean = false;
  isEmpleado: boolean = false;
  isLogged: boolean = false;
  username: string = '';
  constructor(
    private oaut: OauthService,
    private router: Router,
  ) { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    console.log(this.oaut.usuario)
    if(this.oaut.hasRoles('ROLE_EMPLEADO')){
      this.isLogged= true;
      this.isEmpleado= true;
      this.username = this.oaut.usuario.nombre;
    }else if(this.oaut.hasRoles('ROLE_ADMIN')){
      this.isAdmin= true;
      this.isLogged= true;
      this.username = this.oaut.usuario.nombre;
      
    }
    else if(this.oaut.hasRoles('ROLE_USER')){
      this.username = this.oaut.usuario.nombre;
      this.isLogged= true;
      
    }
  }

  logout(): void {
    this.oaut.logout();
    this.isLogged = false
    this.isAdmin = false;
    this.isEmpleado = false;
    this.router.navigate(['/home'])
  }

}
