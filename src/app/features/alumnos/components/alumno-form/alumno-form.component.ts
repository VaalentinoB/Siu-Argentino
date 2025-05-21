import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../../../core/models/alumno.model';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit, OnChanges {
  @Input() alumno: Alumno | null = null;
  @Output() guardar = new EventEmitter<Alumno>();
  @Output() cancelar = new EventEmitter<void>();

  alumnoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alumno'] && this.alumnoForm) {
      this.alumnoForm.patchValue(this.alumno ?? {
        id: '',
        nombre: '',
        apellido: '',
        carrera: '',
        edad: '',
        aprobado: false
      });
    }
  }

  initForm(): void {
    this.alumnoForm = this.fb.group({
      id: [this.alumno?.id || null],
      nombre: [this.alumno?.nombre || '', [Validators.required, Validators.minLength(2)]],
      apellido: [this.alumno?.apellido || '', [Validators.required, Validators.minLength(2)]],
      carrera: [this.alumno?.carrera || '', [Validators.required]],
      edad: [this.alumno?.edad || '', [Validators.required, Validators.min(18), Validators.max(99)]],
      aprobado: [this.alumno?.aprobado || false]
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      this.guardar.emit(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }

  onCancel(): void {
    this.cancelar.emit();
    this.alumnoForm.reset();
  }
}