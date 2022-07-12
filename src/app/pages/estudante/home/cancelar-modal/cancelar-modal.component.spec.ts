import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarModalComponent } from './cancelar-modal.component';

describe('CancelarModalComponent', () => {
  let component: CancelarModalComponent;
  let fixture: ComponentFixture<CancelarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
