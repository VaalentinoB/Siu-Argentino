import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  template: `
    <mat-toolbar color="primary">
      <span>Administración de Alumnos - SIU</span>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {}