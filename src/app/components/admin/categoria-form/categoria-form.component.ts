import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  titulo:string='Crear Categoria';
  categoria:Categoria=new Categoria();

  constructor(
    private service:CategoriaService
  ) { }

  ngOnInit(): void {
  }

  crearCat():void{

  }
}
