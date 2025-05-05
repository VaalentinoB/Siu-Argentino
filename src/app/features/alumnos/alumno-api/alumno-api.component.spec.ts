import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoApiComponent } from './alumno-api.component';

describe('AlumnoApiComponent', () => {
  let component: AlumnoApiComponent;
  let fixture: ComponentFixture<AlumnoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
