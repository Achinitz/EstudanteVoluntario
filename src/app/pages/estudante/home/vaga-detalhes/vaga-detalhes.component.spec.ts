import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDetalhesComponent } from './vaga-detalhes.component';

describe('VagaDetalhesComponent', () => {
  let component: VagaDetalhesComponent;
  let fixture: ComponentFixture<VagaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
