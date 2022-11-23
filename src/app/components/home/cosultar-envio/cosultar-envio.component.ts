import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Envios } from 'src/app/models/envios';
import { EnvioService } from 'src/app/services/envios/envio.service';

@Component({
  selector: 'app-cosultar-envio',
  templateUrl: './cosultar-envio.component.html'
})
export class CosultarEnvioComponent implements OnInit {

  envio: Envios = new Envios();
  formB = this.fb.group({
    id: ['', [Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private serviceEnvio: EnvioService
  ) { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  onSubmit(): void {
    this.serviceEnvio.ver( Number(this.formB.value.id) ).subscribe(data=> this.envio= data)
  }
}
