import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Tarifas } from 'src/app/models/tarifas';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';
import { TarifaService } from 'src/app/services/tarifas/tarifa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifas-form',
  templateUrl: './tarifas-form.component.html',
  styleUrls: ['./tarifas-form.component.css']
})
export class TarifasFormComponent implements OnInit {

  titulo:string='Crear Tarifa';
  tarifa:Tarifas= new Tarifas();
  categorias: Categoria[]=[];
  boton:string='Guardar';

  constructor(
    private serCat:CategoriaService,
    private servicio:TarifaService,
    private route:Router,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serCat.listar().subscribe(categoria=> this.categorias=categoria);
    this.editar();
  }

  guarda():void{
    this.servicio.crear(this.tarifa).subscribe((tarifa)=>{
      Swal.fire('Nuevo:',`alert producto id ${tarifa.id} creado con exito!`,'success');
      this.route.navigate(['/admin/tarifas']);
    });
  }
  actualizar():void{
    this.servicio.actualizar(this.tarifa).subscribe((tarifas)=>{
      Swal.fire('Modificado:',`alert producto id ${tarifas.id} actualizado con exito!`,'success');
      this.route.navigate(['/admin/tarifas']);
    });
  }

  editar():void{
    this.router.params.subscribe(params=>{
      let id = params['id'];
      if (id) {
        this.titulo='Editar Tarifa';
        this.boton='Actualizar';
        this.servicio.ver(id).subscribe((tarifas)=>this.tarifa=tarifas)
      }
    })
  }
  
}
