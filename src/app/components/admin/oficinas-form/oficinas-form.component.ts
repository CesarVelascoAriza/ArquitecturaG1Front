import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Oficinas } from 'src/app/models/oficinas';
import { Vehiculo } from 'src/app/models/vehiculo';
import { CiudadService } from 'src/app/services/ciudades/ciudad.service';
import { OficinasService } from 'src/app/services/oficina/oficinas.service';

@Component({
  selector: 'app-oficinas-form',
  templateUrl: './oficinas-form.component.html',
  styleUrls: ['./oficinas-form.component.css']
})
export class OficinasFormComponent implements OnInit {

  titulo:string='Crear Oficina';
  oficina:Oficinas= new Oficinas();
  ciudades:Ciudad[]=[]
  constructor(
    private serviceCiudad:CiudadService,
    private oficinaService:OficinasService
  ) { }

  ngOnInit(): void {
    this.serviceCiudad.listar().subscribe(data => this.ciudades=data)
  }
  crear():void{
    this.oficinaService.crear(this.oficina).subscribe((oficina)=>{
      console.log(oficina)
    } )
  }

  seleccionarCiudad(e:any):void{
  console.log("",e.target.value);
    this.oficina.ciudad.push(e.target.value);
  }
}
