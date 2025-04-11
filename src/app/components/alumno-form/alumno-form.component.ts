import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlumnoService } from '../../service/alumno.service';
import { Alumno } from '../../model/alumno.model/alumno.model.component';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css'],
  standalone: false
})
export class AlumnoFormComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), this.noNumerosValidator]],
      edad: ['', [Validators.required, Validators.min(18)]],
      aprobado: [false]
    });
  }

  noNumerosValidator(control: AbstractControl) {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { contieneNumeros: true } : null;
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = {
        id: this.alumnoService.getAlumnos().length + 1,
        nombre: this.alumnoForm.value.nombre,
        edad: this.alumnoForm.value.edad,
        aprobado: this.alumnoForm.value.aprobado
      };

      this.alumnoService.agregarAlumno(nuevoAlumno);
      this.alumnoForm.reset();
    }
  }
}
