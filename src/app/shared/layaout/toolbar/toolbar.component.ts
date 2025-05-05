import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="toggleSidebar.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Administración de Alumnos - SIU</span>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}