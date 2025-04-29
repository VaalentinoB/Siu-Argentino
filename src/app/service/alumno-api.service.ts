import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root',
})
export class AlumnoApiService {

  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Valen', apellido: 'Pérez', carrera: 'Sistemas', edad: 22, aprobado: true },
    { id: 2, nombre: 'Sofía', apellido: 'Gómez', carrera: 'Contador', edad: 24, aprobado: false },
    { id: 3, nombre: 'Juan', apellido: 'Martínez', carrera: 'Derecho', edad: 21, aprobado: true },
  ];

  getAlumnos$(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  getAlumnosPromise(): Promise<Alumno[]> {
    return Promise.resolve(this.alumnos);
  }
}