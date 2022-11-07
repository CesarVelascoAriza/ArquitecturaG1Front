import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstadosFormComponent } from './estados-form/estados-form.component';
import { EstadosComponent } from './estados/estados.component';
import { OficinasFormComponent } from './oficinas-form/oficinas-form.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { TarifasFormComponent } from './tarifas-form/tarifas-form.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "oficina", component: OficinasComponent },
      { path: "oficina/form", component: OficinasComponent },
      { path: "oficina/form/:id", component: OficinasFormComponent },
      { path: "estado", component: EstadosComponent },
      { path: "estado/form", component: EstadosFormComponent },
      { path: "estado/form/:id", component: EstadosFormComponent },
      { path: "categoria", component: CategoriasComponent },
      { path: "categoria/form", component: CategoriaFormComponent },
      { path: "tarifas", component: TarifasComponent },
      { path: "tarifas/form", component: TarifasFormComponent },
      { path: "tarifas/form/:id", component: TarifasFormComponent },
      { path: "vehiculo", component: VehiculoComponent },
      { path: "vehiculo/form", component: VehiculoFormComponent },
      { path: "vehiculo/form/:id", component: VehiculoFormComponent },
      { path: "**", redirectTo: "oficina" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
