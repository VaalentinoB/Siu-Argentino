import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Valentino Burioni', edad: 20, aprobado: true },
    { id: 2, nombre: 'Ana García', edad: 22, aprobado: false },
    { id: 3, nombre: 'Marta Espinoza', edad: 22, aprobado: false }
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }
}
