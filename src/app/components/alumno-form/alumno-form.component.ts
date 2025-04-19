import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  standalone: false
})
export class AlumnoFormComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      aprobado: [false]
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      this.alumnoService.agregarAlumno(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }
}