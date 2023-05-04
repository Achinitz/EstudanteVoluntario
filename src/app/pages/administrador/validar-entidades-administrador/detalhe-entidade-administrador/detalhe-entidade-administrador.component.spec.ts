import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEntidadeAdministradorComponent } from './detalhe-entidade-administrador.component';

describe('ValidarEntidadeModalComponent', () => {
  let component: DetalheEntidadeAdministradorComponent;
  let fixture: ComponentFixture<DetalheEntidadeAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEntidadeAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEntidadeAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
