import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AprobadoDirective } from './directives/aprobado.directive';
import { ListaAlumnosComponent } from './components/lista-alumno';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AprobadoDirective,       
    ListaAlumnosComponent,
    AlumnoFormComponent,
    NombreCompletoPipe,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
