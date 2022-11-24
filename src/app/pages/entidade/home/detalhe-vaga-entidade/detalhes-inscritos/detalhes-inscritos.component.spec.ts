import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInscritosComponent } from './detalhes-inscritos.component';

describe('DetalhesInscritosComponent', () => {
  let component: DetalhesInscritosComponent;
  let fixture: ComponentFixture<DetalhesInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesInscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
