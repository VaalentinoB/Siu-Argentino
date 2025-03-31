import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan Pérez', edad: 20, aprobado: true },
    { id: 2, nombre: 'Ana García', edad: 22, aprobado: false },
    { id: 3, nombre: 'Carlos López', edad: 21, aprobado: true },
    { id: 4, nombre: 'María Rodríguez', edad: 23, aprobado: false },
    { id: 5, nombre: 'Pedro Sánchez', edad: 19, aprobado: true },
    { id: 6, nombre: 'Lucía Fernández', edad: 24, aprobado: false },
    { id: 7, nombre: 'Miguel Torres', edad: 20, aprobado: true },
    { id: 8, nombre: 'Sofía Ramírez', edad: 22, aprobado: false },
    { id: 9, nombre: 'Andrés Castro', edad: 21, aprobado: true },
    { id: 10, nombre: 'Elena Vargas', edad: 23, aprobado: false },
    { id: 11, nombre: 'Gabriel Moreno', edad: 19, aprobado: true },
    { id: 12, nombre: 'Carolina Ruiz', edad: 24, aprobado: false },
    { id: 13, nombre: 'Diego Herrera', edad: 20, aprobado: true },
    { id: 14, nombre: 'Paula Mendoza', edad: 22, aprobado: false },
    { id: 15, nombre: 'Manuel Gutiérrez', edad: 21, aprobado: true },
    { id: 16, nombre: 'Victoria Silva', edad: 23, aprobado: false },
    { id: 17, nombre: 'Ricardo Jiménez', edad: 19, aprobado: true },
    { id: 18, nombre: 'Natalia Paredes', edad: 24, aprobado: false },
    { id: 19, nombre: 'Esteban León', edad: 20, aprobado: true },
    { id: 20, nombre: 'Marta Espinoza', edad: 22, aprobado: false }
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }
}
