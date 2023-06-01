import { TestBed } from '@angular/core/testing';

import { AdministradorGeralService } from './administrador-geral.service';

describe('AdministradorGeralService', () => {
  let service: AdministradorGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
