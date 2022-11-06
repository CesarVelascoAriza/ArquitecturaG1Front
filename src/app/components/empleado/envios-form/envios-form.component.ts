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
  formEnvio = this.formBuilder.group({
    descripcionEnvio: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    tipoEmi: ['', [Validators.required]],
    documentoEmi: ['', [Validators.required]],
    nombreEmi: ['', [Validators.required]],
    apellidoEmi: ['', [Validators.required]],
    dirEmi: ['', [Validators.required]],
    emailEmi: ['', [Validators.required]],
    telEmi: ['', [Validators.required]],
    tipoRec: ['', [Validators.required]],
    documentoRec: ['', [Validators.required]],
    nombreRec: ['', [Validators.required]],
    apellidoRec: ['', [Validators.required]],
    dirRec: ['', [Validators.required]],
    emailRec: ['', [Validators.required]],
    telRec: ['', [Validators.required]],
    ciudadOrg: ['', [Validators.required]],
    ciudadDes: ['', [Validators.required]],
    peso: ['', [Validators.required]]
  });

  get descripcion() { return this.formEnvio.get('descripcionEnvio')!; }
  get precio() { return this.formEnvio.get('precio')!; }
  get tipoEmi() { return this.formEnvio.get('tipoEmi')!; }
  get documentoEmis() { return this.formEnvio.get('documentoEmi')!; }
  get nombreEmi() { return this.formEnvio.get('nombreEmi')!; }
  get apellidoEmi() { return this.formEnvio.get('apellidoEmi')!; }
  get dirEmi() { return this.formEnvio.get('dirEmi')!; }
  get telEmi() { return this.formEnvio.get('telEmi')!; }
  get correomi() { return this.formEnvio.get('emailEmi')!; }
  get tipoRec() { return this.formEnvio.get('tipoRec')!; }
  get documentoRec() { return this.formEnvio.get('documentoRec')!; }
  get nombreRec() { return this.formEnvio.get('nombreRec')!; }
  get apellidoRec() { return this.formEnvio.get('apellidoRec')!; }
  get dirRec() { return this.formEnvio.get('dirRec')!; }
  get emailRec() { return this.formEnvio.get('emailRec')!;}
  get telRec() { return this.formEnvio.get('telRec')!; }
  get ciudadOrg() { return this.formEnvio.get('ciudadOrg')!; }
  get ciudadDes() { return this.formEnvio.get('ciudadDes')!; }
  get peso() { return this.formEnvio.get('peso') !;}

  constructor(
    private serviceTipo: TiposDocumentosService,
    private servicEnvio: EnvioService,
    private servicioEstado:EstadoService,
    private servicioCiudad:CiudadService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editar();
    this.serviceTipo.listar().subscribe(data => this.tipoDoc = data);
    this.servicioCiudad.listar().subscribe(data => this.ciudades=data)
    //this.servicioEstado.listar().subscribe(data=> this.estado = data );
  }
 
  onSubmit(): void {
    
    this.envio.descripcionEnvio = this.descripcion?.value!;
    this.envio.precio = Number(this.precio?.value!);

    this.envio.usuarioEmisor.tipo.id = Number(this.tipoEmi?.value!);
    this.envio.usuarioEmisor.numeroDocumento=Number(this.documentoEmis?.value!);
    this.envio.usuarioEmisor.nombre=this.nombreEmi?.value!;
    this.envio.usuarioEmisor.apellido= this.apellidoEmi?.value!;
    this.envio.usuarioEmisor.direccion=this.dirEmi?.value!;
    this.envio.usuarioEmisor.correo=this.correomi?.value!;
    this.envio.usuarioEmisor.telefono=this.telEmi?.value!;

    this.envio.usuarioReceptor.tipo.id=Number(this.tipoRec?.value!);
    this.envio.usuarioReceptor.numeroDocumento=Number(this.documentoRec?.value!) ;
    this.envio.usuarioReceptor.nombre=this.nombreRec?.value!;
    this.envio.usuarioReceptor.apellido=this.apellidoRec?.value!;
    this.envio.usuarioReceptor.direccion=this.dirRec?.value!;
    this.envio.usuarioReceptor.correo=this.emailRec?.value!;
    this.envio.usuarioReceptor.telefono=this.telRec?.value!;
    this.envio.ciudadOrigen.id=Number(this.ciudadOrg?.value!) ;
    this.envio.ciudadDestino.id=Number(this.ciudadDes?.value!) ;
    this.envio.estado.id=8;
    console.log(this.formEnvio.value)
    this.servicEnvio.crear(this.envio).subscribe(data=>{
      alert(`envio creado {data.id} con exito! `);
        this.router.navigate(['/empleado']);
    });
  }
  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      console.log(id);
      if(id!=undefined){
        console.log(id);
        this.titulo="Editar envio";
        console.log(id);
        this.servicEnvio.ver(id).subscribe((envio)=> envio= envio)
        console.log(this.envio); 
      }
    })
  }
  calcularPeso():void{

  }
}
