import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTarifasComponent } from './components/home/consultar-tarifas/consultar-tarifas.component';
import { ContenidoComponent } from './components/home/contenido/contenido.component';
import { CosultarEnvioComponent } from './components/home/cosultar-envio/cosultar-envio.component';
import { LoginComponent } from './components/home/login/login.component';
import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { RegistrarseComponent } from './components/home/registrarse/registrarse.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: ContenidoComponent },
  { path: "home", component: ContenidoComponent },
  { path: "registro", component: RegistrarseComponent },
  { path: "login", component: LoginComponent },
  { path: "consultarEnvio", component: CosultarEnvioComponent },
  { path: "consultartarifa", component: ConsultarTarifasComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "empleado", loadChildren: () => import('./components/empleado/empleado.module').then(m => m.EmpleadoModule) },
  { path: "admin", loadChildren: () => import("./components/admin/admin.module").then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
