import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../core/models/curso.model';
import { CursoService } from '../../../core/services/curso.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone: false,
})
export class CourseListComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }

  eliminar(id: number): void {
    this.cursoService.eliminarCurso(id);
    this.obtenerCursos();
  }

  editar(curso: Curso): void {
    this.cursoService.setCursoEditando(curso);
  }
}