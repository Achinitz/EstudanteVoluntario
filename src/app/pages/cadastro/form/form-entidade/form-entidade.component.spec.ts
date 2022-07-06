import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntidadeComponent } from './form-entidade.component';

describe('FormEntidadeComponent', () => {
  let component: FormEntidadeComponent;
  let fixture: ComponentFixture<FormEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
