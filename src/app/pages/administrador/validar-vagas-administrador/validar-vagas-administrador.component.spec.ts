import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador.component';

describe('ValidarVagasAdministradorComponent', () => {
  let component: ValidarVagasAdministradorComponent;
  let fixture: ComponentFixture<ValidarVagasAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarVagasAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarVagasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
