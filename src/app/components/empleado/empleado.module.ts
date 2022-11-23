import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EnviosComponent } from './envios/envios.component';
import { EnviosFormComponent } from './envios-form/envios-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachosComponent } from './despachos/despachos.component';
import { DespachosFormComponent } from './despachos-form/despachos-form.component';
import {MatPaginatorModule} from'@angular/material/paginator';
import { UsuarioPorEnviosComponent } from './usuario-por-envios/usuario-por-envios.component'

@NgModule({
  declarations: [
    EnviosComponent,
    EnviosFormComponent,
    DespachosComponent,
    DespachosFormComponent,
    UsuarioPorEnviosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpleadoRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class EmpleadoModule { }
