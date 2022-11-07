import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/estado';
import { EstadoService } from 'src/app/services/estado/estado.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  listEstado : Estado[]=[];
  constructor(
    private estadoServ: EstadoService
  ) { }

  ngOnInit(): void {
    this.estadoServ.listar().subscribe(data=> this.listEstado=data);
  }

  eliminar(estado:Estado):void{

    if(confirm("seguro de eliminar el estado")){
      this.estadoServ.eliminar(estado.id).subscribe(() => {
        this.listEstado =this.listEstado.filter(p => p != estado);
        alert('eliminado con exito ');
      });

    }
    
  }
}
