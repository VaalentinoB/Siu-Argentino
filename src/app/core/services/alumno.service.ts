import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  private alumnos: Alumno[] = [];
  private nextId = 1;

  obtenerAlumnos(): Alumno[] {
    return [...this.alumnos];
  }

  obtenerAlumnoPorId(id: number): Alumno | undefined {
    return this.alumnos.find(a => a.id === id);
  }

  agregarAlumno(alumno: Omit<Alumno, 'id'>): void {
    this.alumnos.push({ ...alumno, id: this.nextId++ });
  }

  editarAlumno(id: number, alumno: Omit<Alumno, 'id'>): void {
    const index = this.alumnos.findIndex(a => a.id === id);
    if (index !== -1) this.alumnos[index] = { ...alumno, id };
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
  }
}