import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Valen', apellido: 'Pérez', carrera: 'Sistemas', edad: 22, aprobado: true },
    { id: 2, nombre: 'Sofía', apellido: 'Gómez', carrera: 'Contador', edad: 24, aprobado: false },
    { id: 3, nombre: 'Juan', apellido: 'Martínez', carrera: 'Derecho', edad: 21, aprobado: true },
  ];

  private alumnosSubject = new BehaviorSubject<Alumno[]>([...this.alumnos]);
  alumnos$ = this.alumnosSubject.asObservable();

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$;
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push({ ...alumno, id: this.generarId() });
    this.actualizar();
  }

  editarAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index > -1) {
      this.alumnos[index] = alumno;
      this.actualizar();
    }
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
    this.actualizar();
  }

  private actualizar(): void {
    this.alumnosSubject.next([...this.alumnos]);
  }

  private generarId(): number {
    return this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
  }
}