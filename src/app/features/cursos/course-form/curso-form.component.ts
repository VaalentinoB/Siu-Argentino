import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../core/models/curso.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'],
  standalone: false
})
export class CursoFormComponent implements OnInit {
  cursoForm!: FormGroup;
  editandoCurso: Curso | null = null;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      profesor: ['', Validators.required],
      carrera: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      inscripcionAbierta: [false],
    });

    this.cursoService.getCursoEditando().subscribe((curso) => {
      if (curso) {
        this.editandoCurso = curso;
        this.cursoForm.patchValue(curso);
      }
    });
  }

  guardar(): void {
    const curso: Curso = {
      ...this.cursoForm.value,
      id: this.editandoCurso ? this.editandoCurso.id : 0,
    };

    if (this.editandoCurso) {
      this.cursoService.editarCurso(curso);
    } else {
      this.cursoService.agregarCurso(curso);
    }

    this.router.navigate(['/cursos']);
  }
}