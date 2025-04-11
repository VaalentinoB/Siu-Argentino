import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumno';
import { CommonModule } from '@angular/common';
import { AprobadoDirective } from './directives/aprobado.directive';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    AlumnoFormComponent
    
    
  ],
  imports: [
    BrowserModule,  
    CommonModule,
    AprobadoDirective,
    ReactiveFormsModule,  
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }