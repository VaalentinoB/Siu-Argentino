import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlumnosModule,
    CursosModule,
    HomeModule
  ]
})
export class FeaturesModule { }