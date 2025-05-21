import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: Curso[] = [
    { id: 1, nombre: 'Angular', descripcion: 'Frontend con Angular' },
    { id: 2, nombre: 'Node.js', descripcion: 'Backend con Node' },
  ];

  private cursosSubject = new BehaviorSubject<Curso[]>([...this.cursos]);
  cursos$ = this.cursosSubject.asObservable();

  getCursos(): Observable<Curso[]> {
    return this.cursos$;
  }

  agregarCurso(curso: Curso): void {
    this.cursos.push({ ...curso, id: this.generarId() });
    this.actualizar();
  }

  editarCurso(curso: Curso): void {
    const index = this.cursos.findIndex(c => c.id === curso.id);
    if (index > -1) {
      this.cursos[index] = curso;
      this.actualizar();
    }
  }

  eliminarCurso(id: number): void {
    this.cursos = this.cursos.filter(c => c.id !== id);
    this.actualizar();
  }

  private actualizar(): void {
    this.cursosSubject.next([...this.cursos]);
  }

  private generarId(): number {
    return this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id)) + 1 : 1;
  }
}