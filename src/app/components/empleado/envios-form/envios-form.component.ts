import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { Envios } from 'src/app/models/envios';
import { Estado } from 'src/app/models/estado';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { CiudadService } from 'src/app/services/ciudades/ciudad.service';
import { EnvioService } from 'src/app/services/envios/envio.service';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { TiposDocumentosService } from 'src/app/services/tipos/tipos-documentos.service';

@Component({
  selector: 'app-envios-form',
  templateUrl: './envios-form.component.html',
  styleUrls: ['./envios-form.component.css']
})
export class EnviosFormComponent implements OnInit {

  titulo: string = "Crear Envios";
  envio: Envios = new Envios();
  tipoDoc: TipoDocumento[] = [];
  estado:Estado[]=[];
  ciudades:Ciudad[]=[];
 

  constructor(
    private serviceTipo: TiposDocumentosService,
    private servicEnvio: EnvioService,
    private servicioEstado:EstadoService,
    private servicioCiudad:CiudadService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editar();
    this.serviceTipo.listar().subscribe(data => this.tipoDoc = data);
    this.servicioCiudad.listar().subscribe(data => this.ciudades=data)
  }
 
  onSubmit(): void {
    
    this.envio.estado.id=8;
    console.log(this.envio)
    this.servicEnvio.crear(this.envio).subscribe(data=>{
      alert(`envio creado {data.id} con exito! `);
        this.router.navigate(['/empleado']);
    });
  }
  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id!=undefined){
        this.titulo="Editar envio";
        this.servicEnvio.ver(id).subscribe((envio)=> this.envio= envio);
      }
    })
  }
  calcularPeso():void{

  }
}
