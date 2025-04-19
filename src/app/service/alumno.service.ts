import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({ providedIn: 'root' })
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', aprobado: true },
    { id: 2, nombre: 'María', apellido: 'López', aprobado: false }
  ];

  getAlumno(): Alumno[] {
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push({ ...alumno, id: this.alumnos.length + 1 });
  }
}