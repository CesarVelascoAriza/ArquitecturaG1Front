import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Variable } from 'src/app/models/variable';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';
import { VariablesService } from 'src/app/services/variable/variables.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  titulo: string = 'Crear Categoria';
  categoria: Categoria = new Categoria();
  variables :Variable[]=[];
  constructor(
    private service: CategoriaService,
    private serviceVar:VariablesService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serviceVar.listar().subscribe((variable)=> this.variables= variable)
    this.editar();
  }

  crearCat(): void {
    this.service.crear(this.categoria).subscribe((categorias)=>{
      Swal.fire('Nuevo:',`alert categoria id ${categorias.nombre} creado con exito!`,'success');
      this.router.navigate(['/admin/categoria']);
    })
  }
  editar():void{
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.titulo= 'Editar Categorias';
        this.service.ver(id).subscribe((categoria)=> this.categoria= categoria);
      }
    })
  }
}
