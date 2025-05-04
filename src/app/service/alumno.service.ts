import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../model/alumno.model/alumno.model.component';

@Injectable({ providedIn: 'root' })
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Valen', apellido: 'Pérez', carrera: 'Sistemas', edad: 22, aprobado: true },
    { id: 2, nombre: 'Sofía', apellido: 'Gómez', carrera: 'Contador', edad: 24, aprobado: false },
    { id: 3, nombre: 'Juan', apellido: 'Martínez', carrera: 'Derecho', edad: 21, aprobado: true }
  ];

  private alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  agregarAlumno(alumno: Alumno) {
    alumno.id = Date.now(); // ID único
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }

  eliminarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    this.alumnos$.next(this.alumnos);
  }

  editarAlumno(alumnoEditado: Alumno) {
    const index = this.alumnos.findIndex(a => a.id === alumnoEditado.id);
    if (index !== -1) {
      this.alumnos[index] = alumnoEditado;
      this.alumnos$.next(this.alumnos);
    }
  }
}