import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador.component';

describe('ValidarEstudantesAdministradorComponent', () => {
  let component: ValidarEstudantesAdministradorComponent;
  let fixture: ComponentFixture<ValidarEstudantesAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarEstudantesAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEstudantesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
