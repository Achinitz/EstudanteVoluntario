import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarEntidadeModalComponent } from './validar-entidade-modal.component';

describe('ValidarEntidadeModalComponent', () => {
  let component: ValidarEntidadeModalComponent;
  let fixture: ComponentFixture<ValidarEntidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarEntidadeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEntidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
