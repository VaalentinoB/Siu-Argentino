import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan Pérez', edad: 20, aprobado: true },
    { id: 2, nombre: 'Ana García', edad: 22, aprobado: false },
    { id: 3, nombre: 'Carlos López', edad: 21, aprobado: true }
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }
}
