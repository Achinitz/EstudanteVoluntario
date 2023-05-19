import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCursoComponent } from './modal-curso.component';

describe('DetalhesCursoComponent', () => {
  let component: DetalhesCursoComponent;
  let fixture: ComponentFixture<DetalhesCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});