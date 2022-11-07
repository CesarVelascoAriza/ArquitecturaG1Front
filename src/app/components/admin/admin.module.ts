import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TarifasComponent } from './tarifas/tarifas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { TarifasFormComponent } from './tarifas-form/tarifas-form.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { OficinasFormComponent } from './oficinas-form/oficinas-form.component';
import { EstadosComponent } from './estados/estados.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { EstadosFormComponent } from './estados-form/estados-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TarifasComponent,
    CategoriasComponent,
    CategoriaFormComponent,
    TarifasFormComponent,
    OficinasComponent,
    OficinasFormComponent,
    EstadosComponent,
    VehiculoComponent,
    VehiculoFormComponent,
    EstadosFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
