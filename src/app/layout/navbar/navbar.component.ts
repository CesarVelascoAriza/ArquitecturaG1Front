import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/usuarios/oauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged:boolean= false;
  username:string='';
  constructor(
    private oaut:OauthService
  ) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    this.oaut.usuario.subscribe(data=>{
      this.isLogged=true;
      this.username=data;
    })
  }


}
