import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumno';
import { CommonModule } from '@angular/common';
import { AprobadoDirective } from './directives/aprobado.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    
  ],
  imports: [
    BrowserModule,  
    CommonModule,
    AprobadoDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }