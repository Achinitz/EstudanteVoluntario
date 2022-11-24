import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarAvaliacaoComponent } from './modal-adicionar-avaliacao.component';

describe('ModalAdicionarAvaliacaoComponent', () => {
  let component: ModalAdicionarAvaliacaoComponent;
  let fixture: ComponentFixture<ModalAdicionarAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
