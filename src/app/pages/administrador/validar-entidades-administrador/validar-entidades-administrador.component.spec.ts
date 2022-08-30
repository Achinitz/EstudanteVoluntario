import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador.component';

describe('ValidarEntidadesAdministradorComponent', () => {
  let component: ValidarEntidadesAdministradorComponent;
  let fixture: ComponentFixture<ValidarEntidadesAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarEntidadesAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEntidadesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
