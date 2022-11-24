import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVagaAdministradorComponent } from './detalhe-vaga-administrador.component';

describe('DetalheVagaAdministradorComponent', () => {
  let component: DetalheVagaAdministradorComponent;
  let fixture: ComponentFixture<DetalheVagaAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheVagaAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVagaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
