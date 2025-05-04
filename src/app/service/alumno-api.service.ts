import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root',
})
export class AlumnoApiService {

  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Valen', apellido: 'Pérez', carrera: 'Sistemas', edad: 22, aprobado: true},
    { id: 2, nombre: 'Sofía', apellido: 'Gómez', carrera: 'Contador', edad: 24, aprobado: false,},
    { id: 3, nombre: 'Juan', apellido: 'Martínez', carrera: 'Derecho', edad: 21, aprobado: true},
  ];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);

  getAlumnos$(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  getAlumnosPromise(): Promise<Alumno[]> {
    return Promise.resolve(this.alumnos);
  }

  agregarAlumno(alumno: Alumno) {
    alumno.id = Date.now(); 
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
  }

  eliminarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    this.alumnosSubject.next(this.alumnos);
  }

  actualizarAlumno(alumno: Alumno) {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
      this.alumnosSubject.next(this.alumnos);
    }
  }
}