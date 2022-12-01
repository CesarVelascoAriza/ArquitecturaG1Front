import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/models/marca';
import { MedioTransporte } from 'src/app/models/medio-transporte';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo;
  titulo: string = 'Crear vehiculo';
  ListmedioTransporte : MedioTransporte[]=[
    {id:1, medio:'carro'},
    {id:2, medio:'Camion'},
    {id:3, medio:'camioneta'},
    {id:3, medio:'moto'},
    {id:3, medio:'avion'},
  ]
  formP: FormGroup = this.fb.group({
    id: [this.vehiculo.id, [Validators.required]],
    placa: [this.vehiculo.placa, [Validators.required]],
    marca:[this.vehiculo.marca, [Validators.required]],
    medio: [this.vehiculo.medio, [Validators.required]]
  })
  
  listmarca:Marca[]=[
    {id:1,marca:'VMW'},
    {id:2,marca:'Chevrolet'},
    {id:3,marca:'Mazda'},
    {id:4,marca:'Honda'},
  ]
  constructor(
    private fb: FormBuilder,
    private serviceV:VehiculoService,
    private router:Router,
    private routes:ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.editar()
  }

  editar(): void {
    this.routes.params.subscribe(params=>{
      let id =params['id'];
      if(id!=undefined){
        this.serviceV.ver(id).subscribe((vehiculo)=> {
          this.vehiculo =vehiculo
          console.log(this.vehiculo)
          this.formP.patchValue(vehiculo)
        })
      }
    })
  }
  onSubmit():void{
    this.vehiculo=this.formP.value
      console.log(this.vehiculo); 
      this.serviceV.crear(this.vehiculo).subscribe((vehiculo)=> {
        this.router.navigate(['/admin/vehiculo/'])
        console.log(vehiculo)
      })
  }

}
