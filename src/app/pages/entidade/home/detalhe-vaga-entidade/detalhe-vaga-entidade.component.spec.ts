import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVagaEntidadeComponent } from './detalhe-vaga-entidade.component';

describe('DetalheVagaEntidadeComponent', () => {
  let component: DetalheVagaEntidadeComponent;
  let fixture: ComponentFixture<DetalheVagaEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheVagaEntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVagaEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
