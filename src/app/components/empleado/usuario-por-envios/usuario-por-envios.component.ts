import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Envios } from 'src/app/models/envios';
import { EnvioService } from 'src/app/services/envios/envio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-por-envios',
  templateUrl: './usuario-por-envios.component.html',
  styleUrls: ['./usuario-por-envios.component.css']
})
export class UsuarioPorEnviosComponent implements OnInit {

  envios: Envios[] = [];
  formB = this.fb.group({
    id: ['', [Validators.required]],
    fechaInicial: ['', [Validators.required]],
    fechaFinal: ['', [Validators.required]]
  })

  constructor(
    private service: EnvioService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  get id() { return this.formB.get('id') }
  get fechaInicial() { return this.formB.get('fechaInicial') }
  get fechaFinal() { return this.formB.get('fechaFinal') }
  onSubmit(): void {
    console.log(this.id?.value)
    console.log(this.fechaInicial?.value!,this.fechaFinal?.value!)
    this.service.buscarPorUsurioYfecha(Number(this.id?.value), this.fechaInicial?.value!,this.fechaFinal?.value!)
    .subscribe(data=>{
      if(data.length=== 0){
        Swal.fire('Informacion', 'datos no encontrados', 'warning')
      }
      else{
        this.envios=data
      }
    })
  }


}
