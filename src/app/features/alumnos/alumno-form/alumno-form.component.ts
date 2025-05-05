// src/app/features/alumnos/alumno-form/alumno-form.component.ts
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../../core/service/alumno.service';
import { Alumno } from '../../features/alumnos/model/alumno.model/alumno.model.component';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html'
})
export class AlumnoFormComponent {
  @Input() alumnoEditando?: Alumno;
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      edad: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      aprobado: [false]
    });
  }

  ngOnChanges() {
    if (this.alumnoEditando) {
      this.alumnoForm.patchValue(this.alumnoEditando);
    }
  }

  guardar() {
    if (this.alumnoForm.valid) {
      const alumno = this.alumnoForm.value;
      if (alumno.id) {
        this.alumnoService.editarAlumno(alumno);
      } else {
        this.alumnoService.agregarAlumno(alumno);
      }
      this.alumnoForm.reset({ aprobado: false });
    }
  }
}