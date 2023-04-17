import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEstudanteComponent } from './detalhe-estudante.component';

describe('DetalheEstudanteComponent', () => {
  let component: DetalheEstudanteComponent;
  let fixture: ComponentFixture<DetalheEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
