import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasAndamentoComponent } from './vagas-andamento.component';

describe('VagasAndamentoComponent', () => {
  let component: VagasAndamentoComponent;
  let fixture: ComponentFixture<VagasAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasAndamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
