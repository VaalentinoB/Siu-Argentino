import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { ListaAlumnosComponent } from './components/lista-alumno';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { AlumnoApiComponent } from './components/alumno-api/alumno-api.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoFormComponent,
    ListaAlumnosComponent,
    NavbarComponent,
    ToolbarComponent,
    AlumnoApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
],
  bootstrap: [AppComponent]
})
export class AppModule {}