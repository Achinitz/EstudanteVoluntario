import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestalhesVagaComponent } from './destalhes-vaga.component';

describe('DestalhesVagaComponent', () => {
  let component: DestalhesVagaComponent;
  let fixture: ComponentFixture<DestalhesVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestalhesVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestalhesVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
