import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesbloqueioComponent } from './modal-desbloqueio.component';

describe('ModalDesbloqueioComponent', () => {
  let component: ModalDesbloqueioComponent;
  let fixture: ComponentFixture<ModalDesbloqueioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDesbloqueioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDesbloqueioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
