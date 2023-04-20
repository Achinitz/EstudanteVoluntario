import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnexarRelatorioComponent } from './modal-anexar-relatorio.component';

describe('ModalAnexarRelatorioComponent', () => {
  let component: ModalAnexarRelatorioComponent;
  let fixture: ComponentFixture<ModalAnexarRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnexarRelatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnexarRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
