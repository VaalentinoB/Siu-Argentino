import { Component } from '@angular/core';
import { AlumnoService } from '../core/service/alumno.service';
import { Alumno } from '../features/alumnos/model/alumno.model/alumno.model.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './lista-alumno.html'
})
export class AlumnoListComponent {
  alumnos$: Observable<Alumno[]>;
  alumnoParaEditar?: Alumno;

  constructor(private alumnoService: AlumnoService) {
    this.alumnos$ = this.alumnoService.getAlumnos();
  }

  editar(alumno: Alumno) {
    this.alumnoParaEditar = { ...alumno };
  }

  eliminar(id: number) {
    this.alumnoService.eliminarAlumno(id);
  }
}