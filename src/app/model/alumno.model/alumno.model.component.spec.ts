import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoModelComponent } from './alumno.model.component';

describe('AlumnoModelComponent', () => {
  let component: AlumnoModelComponent;
  let fixture: ComponentFixture<AlumnoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
