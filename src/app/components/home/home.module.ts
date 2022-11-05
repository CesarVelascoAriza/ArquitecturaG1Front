import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CosultarEnvioComponent } from './cosultar-envio/cosultar-envio.component';
import { ConsultarTarifasComponent } from './consultar-tarifas/consultar-tarifas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    RegistrarseComponent,
    LoginComponent,
    ContenidoComponent,
    CarruselComponent,
    CosultarEnvioComponent,
    ConsultarTarifasComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistrarseComponent,
    LoginComponent,
    ContenidoComponent,
    CarruselComponent,
    CosultarEnvioComponent
  ]
})
export class HomeModule { }
