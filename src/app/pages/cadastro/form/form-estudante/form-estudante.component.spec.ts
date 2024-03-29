import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudanteComponent } from './form-estudante.component';

describe('FormEstudanteComponent', () => {
  let component: FormEstudanteComponent;
  let fixture: ComponentFixture<FormEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
