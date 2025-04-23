import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../model/alumno.model/alumno.model.component';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css'],
  standalone: false
})
export class AlumnoFormComponent {
  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      fechaNacimiento: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      aprobado: [false]
    });
  }

  guardarAlumno(): void {
    if (this.alumnoForm.valid) {
      this.alumnos.push(this.alumnoForm.value);
      this.alumnoForm.reset({ aprobado: false });
    } else {
      this.alumnoForm.markAllAsTouched();
      console.log("Formulario inválido:", this.alumnoForm.value);
    }
  }
}