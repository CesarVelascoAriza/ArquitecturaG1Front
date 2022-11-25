import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado';
import { EstadoService } from 'src/app/services/estado/estado.service';

@Component({
  selector: 'app-estados-form',
  templateUrl: './estados-form.component.html',
  styleUrls: ['./estados-form.component.css']
})
export class EstadosFormComponent implements OnInit {

  titulo:string='Crear Estado';
  estados:Estado = new Estado;
  boton:string='Guardar';

  constructor(
    private router:Router,
    private routes:ActivatedRoute,
    private service:EstadoService
  ) { }

  ngOnInit(): void {
    this.editar();
  }
  onSubmit():void{
    if(this.estados.id===0){
      this.service.crear(this.estados).subscribe(data=>{
        alert('envio creado `{data.id} `con exito! ');
        this.router.navigate(['/admin/estado']);
      })
    }
    else{
      this.service.actualizar(this.estados).subscribe(data=>{
        alert( `envio actualizado {data.id} con exito! `);
        this.router.navigate(['/admin/estado']);
      })
    }
  }
  editar() {
    this.routes.params.subscribe(params=>{
      let id =params['id'];
      if(id!=undefined){
        this.titulo='Editar Estado';
        this.service.ver(id).subscribe((estado)=> this.estados=estado)
      }
    })
    
  }
}
 

