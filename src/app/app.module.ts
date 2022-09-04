import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GuideComponent } from './components/guide/guide.component';
import { QuoteComponent } from './components/quote/quote.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { StartContentComponent } from './components/start-content/start-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    AboutUsComponent,
    GuideComponent,
    QuoteComponent,
    CheckInComponent,
    LogInComponent,
    StartContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
