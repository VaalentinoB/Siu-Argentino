import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './pages/lista-alumno/lista-alumnos.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ListaAlumnosComponent, AlumnoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    DirectivesModule,
    PipesModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class AlumnosModule {}