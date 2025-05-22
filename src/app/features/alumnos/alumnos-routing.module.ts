import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

const routes: Routes = [
  { path: '', component: AlumnosListComponent },
  { path: 'nuevo', component: AlumnoFormComponent },
  { path: 'editar/:id', component: AlumnoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule {}