import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviosFormComponent } from './envios-form/envios-form.component';
import { EnviosComponent } from './envios/envios.component';

const routes: Routes = [
  {
    path: "", children: [
      {path:"envios",component:EnviosComponent},
      {path:"envios/form", component:EnviosFormComponent},
      {path:"envios/form/:id", component:EnviosFormComponent},
      {path:"**", redirectTo:"envios"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
