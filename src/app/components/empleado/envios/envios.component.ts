import { Component, OnInit } from '@angular/core';
import { Envios } from 'src/app/models/envios';
import { EnvioService } from 'src/app/services/envios/envio.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html'
})
export class EnviosComponent implements OnInit {

  lista:Envios[]=[];

  constructor(
    private service:EnvioService
  ) 
  { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    this.service.listar().subscribe(data=> this.lista=data);
  }

}
