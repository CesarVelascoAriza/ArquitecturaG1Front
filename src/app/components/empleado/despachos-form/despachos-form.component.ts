import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Despacho } from 'src/app/models/despacho';
import { DespachoEnvios } from 'src/app/models/despacho-envios';
import { Envios } from 'src/app/models/envios';
import { Estado } from 'src/app/models/estado';
import { Vehiculo } from 'src/app/models/vehiculo';
import { DespachoService } from 'src/app/services/despachos/despacho.service';
import { EnvioService } from 'src/app/services/envios/envio.service';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-despachos-form',
  templateUrl: './despachos-form.component.html',
  styleUrls: ['./despachos-form.component.css']
})
export class DespachosFormComponent implements OnInit {

  titulo:string='Despacho Formulario';
  boton:string='Crear';
  despacho:Despacho = new Despacho();

  enviosListado:Envios[]=[];
  listVehiculos:Vehiculo[]=[];
  listEstado:Estado[]=[];
  despachoEnvios:DespachoEnvios =new DespachoEnvios();

  constructor(
    private serEnvio:EnvioService,
    private serVehiculo:VehiculoService,
    private serEstado:EstadoService,
    private service:DespachoService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serEnvio.listar().subscribe((envios)=> this.enviosListado = envios );
    this.serVehiculo.listar().subscribe((vehiculos)=> this.listVehiculos = vehiculos);
    this.serEstado.listar().subscribe((estados)=> this.listEstado = estados);
    this.editar();
  }

  addDespachoEnvios(envio:Envios):void{
    this.despachoEnvios.entregado = false;
    this.despachoEnvios.fechaEntrega = new Date().toString();
    this.despachoEnvios.envio=envio;
    this.despacho.despachos.push(this.despachoEnvios);
  }

  crear():void{
    this.service.crear(this.despacho).subscribe((despachos)=>{
      Swal.fire('Nuevo:',`alert despacho id ${despachos.id} creado con exito!`,'success');
      this.router.navigate(['/empleado/despachos']);
    });
  }

  actualizar():void{
    this.service.actualizar(this.despacho).subscribe((despachos)=>{
      Swal.fire('Actualizado:',`alert producto id ${despachos.id} Actualizado con exito!`,'success');
      this.router.navigate(['/empleado/despachos']);
    });
  }

  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.titulo='Editar formulario Despacho';
        this.boton='Actualizar';
        this.service.ver(id).subscribe((despachos)=> this.despacho = despachos );
      }
    });
  }
}
