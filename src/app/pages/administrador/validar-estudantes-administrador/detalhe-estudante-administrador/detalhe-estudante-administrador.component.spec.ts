import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEstudanteAdministradorComponent } from './detalhe-estudante-administrador.component';

describe('ValidarEstudanteModalComponent', () => {
  let component: DetalheEstudanteAdministradorComponent;
  let fixture: ComponentFixture<DetalheEstudanteAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEstudanteAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEstudanteAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
