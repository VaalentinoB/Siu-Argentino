import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Programación Web',
      profesor: 'Juan Pérez',
      carrera: 'Sistemas',
      fechaInicio: new Date(),
      inscripcionAbierta: true,
    },
    {
      id: 2,
      nombre: 'Bases de Datos',
      profesor: 'María González',
      carrera: 'Sistemas',
      fechaInicio: new Date(),
      inscripcionAbierta: false,
    },
  ];

  private cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  private cursoEditandoSubject = new BehaviorSubject<Curso | null>(null);

  constructor() {}

  getCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();
  }

  agregarCurso(curso: Curso): void {
    curso.id = this.generarId();
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso): void {
    const index = this.cursos.findIndex((c) => c.id === curso.id);
    if (index !== -1) {
      this.cursos[index] = curso;
      this.cursosSubject.next(this.cursos);
    }
  }

  eliminarCurso(id: number): void {
    this.cursos = this.cursos.filter((c) => c.id !== id);
    this.cursosSubject.next(this.cursos);
  }

  setCursoEditando(curso: Curso): void {
    this.cursoEditandoSubject.next(curso);
  }

  getCursoEditando(): Observable<Curso | null> {
    return this.cursoEditandoSubject.asObservable();
  }

  private generarId(): number {
    return this.cursos.length > 0 ? Math.max(...this.cursos.map((c) => c.id)) + 1 : 1;
  }
}