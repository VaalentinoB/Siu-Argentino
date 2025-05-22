import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/core/models/alumno.model';
import { AlumnosService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {
  alumnoForm: FormGroup;
  idEditar: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      carrera: ['', Validators.required],
      aprobado: [false]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idEditar = +idParam;
      const alumno = this.alumnosService.obtenerAlumnoPorId(this.idEditar);
      if (alumno) this.alumnoForm.patchValue(alumno);
    }
  }

  guardar(): void {
    if (this.alumnoForm.valid) {
      if (this.idEditar !== null) {
        this.alumnosService.editarAlumno(this.idEditar, this.alumnoForm.value);
      } else {
        this.alumnosService.agregarAlumno(this.alumnoForm.value);
      }
      this.alumnoForm.reset();
    }
  }
}