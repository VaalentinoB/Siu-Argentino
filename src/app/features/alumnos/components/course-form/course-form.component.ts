import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../../../../core/models/curso.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  standalone: false
})
export class CourseFormComponent {
  @Input() curso: Curso | null = null;
  @Output() onSave = new EventEmitter<Curso>();

  cursoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cursoForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: [''],
      duracion: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.curso) {
      this.cursoForm.patchValue(this.curso);
    }
  }

  guardar(): void {
    if (this.cursoForm.valid) {
      this.onSave.emit(this.cursoForm.value);
      this.cursoForm.reset();
    }
  }
}