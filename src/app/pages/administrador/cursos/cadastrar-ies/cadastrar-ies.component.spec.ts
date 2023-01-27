import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarIesComponent } from './cadastrar-ies.component';

describe('CadastrarIesComponent', () => {
  let component: CadastrarIesComponent;
  let fixture: ComponentFixture<CadastrarIesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarIesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarIesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
