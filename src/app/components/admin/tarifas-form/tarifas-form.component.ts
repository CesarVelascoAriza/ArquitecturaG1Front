import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Tarifas } from 'src/app/models/tarifas';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';

@Component({
  selector: 'app-tarifas-form',
  templateUrl: './tarifas-form.component.html',
  styleUrls: ['./tarifas-form.component.css']
})
export class TarifasFormComponent implements OnInit {

  titulo:string='Crear Tarifa';
  tarifa:Tarifas= new Tarifas();
  categorias: Categoria[]=[];

  constructor(
    private serCat:CategoriaService
  ) { }

  ngOnInit(): void {
    this.serCat.listar().subscribe(categoria=> this.categorias=categoria)
  }

  
}
