import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EnviosComponent } from './envios/envios.component';
import { EnviosFormComponent } from './envios-form/envios-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnviosComponent,
    EnviosFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpleadoRoutingModule,
    HttpClientModule
  ]
})
export class EmpleadoModule { }
