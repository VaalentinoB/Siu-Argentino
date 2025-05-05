import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../../features/alumnos/model/alumno.model/alumno.model.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnosSubject = new BehaviorSubject<Alumno[]>([]);
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', carrera: 'Ingeniería', edad: 21, aprobado: true },
    { id: 2, nombre: 'Ana', apellido: 'García', carrera: 'Arquitectura', edad: 23, aprobado: false },
  ];

  constructor() {
    this.alumnosSubject.next(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  agregarAlumno(alumno: Alumno): void {
    alumno.id = this.generarId();
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
  }

  editarAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index > -1) {
      this.alumnos[index] = alumno;
      this.alumnosSubject.next(this.alumnos);
    }
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    this.alumnosSubject.next(this.alumnos);
  }

  private generarId(): number {
    return this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
  }
}