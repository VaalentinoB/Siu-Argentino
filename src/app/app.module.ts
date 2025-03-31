import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumno/lista-alumno';
import { CommonModule } from '@angular/common';
import {ListaAlumnosComponent as ListaAlumnoComponentHtmlComponent} from './components/lista-alumno/lista-alumno';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ListaAlumnoComponentHtmlComponent
  ],
  imports: [
    BrowserModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
