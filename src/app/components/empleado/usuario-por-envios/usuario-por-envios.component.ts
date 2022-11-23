import { Component, OnInit } from '@angular/core';
import { Envios } from 'src/app/models/envios';
import { EnvioService } from 'src/app/services/envios/envio.service';

@Component({
  selector: 'app-usuario-por-envios',
  templateUrl: './usuario-por-envios.component.html',
  styleUrls: ['./usuario-por-envios.component.css']
})
export class UsuarioPorEnviosComponent implements OnInit {

  envios: Envios[]=[];

  constructor(
    private service:EnvioService
  ) { }

  ngOnInit(): void {
  }

}
