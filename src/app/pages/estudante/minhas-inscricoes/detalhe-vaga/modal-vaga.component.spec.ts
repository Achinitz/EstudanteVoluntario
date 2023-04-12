import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVagaComponent } from './modal-vaga.component';

describe('ModalVagaComponent', () => {
  let component: ModalVagaComponent;
  let fixture: ComponentFixture<ModalVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
