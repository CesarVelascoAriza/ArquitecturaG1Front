import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespachosFormComponent } from './despachos-form/despachos-form.component';
import { DespachosComponent } from './despachos/despachos.component';
import { EnviosFormComponent } from './envios-form/envios-form.component';
import { EnviosComponent } from './envios/envios.component';
import { UsuarioPorEnviosComponent } from './usuario-por-envios/usuario-por-envios.component';

const routes: Routes = [
  {
    path: "", children: [
      {path:"envios",component:EnviosComponent},
      {path:"envios/form", component:EnviosFormComponent},
      {path:"envios/form/:id", component:EnviosFormComponent},
      {path:"despachos", component:DespachosComponent},
      {path:"despachos/form",component:DespachosFormComponent},
      {path:"despachos/form/:id",component:DespachosFormComponent},
      {path:"busquedasPorUsuarios",component:UsuarioPorEnviosComponent},
      {path:"**", redirectTo:"envios"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
