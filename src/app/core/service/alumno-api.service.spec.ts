import { TestBed } from '@angular/core/testing';

import { AlumnoApiService } from './alumno-api.service';

describe('AlumnoApiService', () => {
  let service: AlumnoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
