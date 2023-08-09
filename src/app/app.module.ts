import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import RoutesName from './Constant/routerNames';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    SobremiComponent,
    ProyectosComponent,
    FooterComponent,
    RrssComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
