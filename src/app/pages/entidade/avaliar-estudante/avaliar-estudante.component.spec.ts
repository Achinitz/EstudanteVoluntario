import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarEstudanteComponent } from './avaliar-estudante.component';

describe('AvaliarEstudanteComponent', () => {
  let component: AvaliarEstudanteComponent;
  let fixture: ComponentFixture<AvaliarEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
