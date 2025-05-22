import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';

@NgModule({
  declarations: [
    AlumnoFormComponent,
    AlumnosListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }