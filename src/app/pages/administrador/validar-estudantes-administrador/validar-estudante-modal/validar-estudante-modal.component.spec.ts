import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEstudanteModalComponent } from './validar-estudante-modal.component';

describe('ValidarEstudanteModalComponent', () => {
  let component: ValidarEstudanteModalComponent;
  let fixture: ComponentFixture<ValidarEstudanteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarEstudanteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEstudanteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
