import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { GuideComponent } from './components/guide/guide.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { QuoteComponent } from './components/quote/quote.component';
import { StartContentComponent } from './components/start-content/start-content.component';

const routes: Routes = [
  { path: "", component: StartContentComponent, pathMatch: 'full' },
  { path: "cotizar", component: QuoteComponent },
  { path: "guia", component: GuideComponent },
  { path: "Nosotros", component: AboutUsComponent },
  { path: "login", component: LogInComponent },
  { path: "registrarse", component: CheckInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
