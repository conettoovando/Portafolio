import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './components/home/home.component';
import { SuccessComponent } from './components/success/success.component';


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
    FormContactComponent,
    HomeComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
