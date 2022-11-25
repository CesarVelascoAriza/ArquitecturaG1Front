import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { Oficinas } from 'src/app/models/oficinas';
import { Vehiculo } from 'src/app/models/vehiculo';
import { CiudadService } from 'src/app/services/ciudades/ciudad.service';
import { OficinasService } from 'src/app/services/oficina/oficinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oficinas-form',
  templateUrl: './oficinas-form.component.html',
  styleUrls: ['./oficinas-form.component.css']
})
export class OficinasFormComponent implements OnInit {

  titulo: string = 'Crear Oficina';
  oficina: Oficinas = new Oficinas();
  ciudades: Ciudad[] = []
  ciudad: Ciudad = new Ciudad();
  boton:string='crear';
  constructor(
    private serviceCiudad: CiudadService,
    private oficinaService: OficinasService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serviceCiudad.listar().subscribe(data => this.ciudades = data)
    this.editar();
  }
  crear(): void {
    this.oficinaService.crear(this.oficina).subscribe((oficina) => {
      console.log(oficina)
      Swal.fire('Nuevo:', `oficina nombre ${oficina.nombre} creado con exito!`, 'success');
      this.router.navigate(['/admin/oficina']);
    })
  }

  seleccionarCiudad(e: any): void {
    console.log("", e);
    this.ciudad.id = Number(e.target.value); 
    if (this.oficina.ciudad.length === 0) {
      console.log(this.oficina.ciudad)
      this.oficina.ciudad.push(this.ciudad);
      console.log(this.oficina.ciudad)
    }
  }
  actualizar():void{
    this.oficinaService.actualizar(this.oficina).subscribe((oficina) => {
      console.log(oficina)
      Swal.fire('Actualizado:', `oficina nombre ${oficina.nombre} Actualizado con exito!`, 'success');
      this.router.navigate(['/admin/oficina']);
    })
  }
  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.titulo= 'Editar Usuario';
        this.boton='actualizar'
        this.oficinaService.ver(id).subscribe((usuarios)=> this.oficina= usuarios);
      }
    })
  }
}
