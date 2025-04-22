import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AprobadoDirective } from '../directives/aprobado.directive';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AprobadoDirective, NombreApellidoPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AprobadoDirective,
    NombreApellidoPipe,
    MatCheckboxModule
  ]
})
export class SharedModule {}