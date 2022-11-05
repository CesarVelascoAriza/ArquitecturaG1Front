import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/home/contenido/contenido.component';
import { CosultarEnvioComponent } from './components/home/cosultar-envio/cosultar-envio.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistrarseComponent } from './components/home/registrarse/registrarse.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: ContenidoComponent },
  { path: "registro", component: RegistrarseComponent },
  { path: "login", component: LoginComponent },
  { path: "consultarEnvio", component: CosultarEnvioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
