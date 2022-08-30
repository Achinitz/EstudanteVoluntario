import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInstituicaoComponent } from './cadastrar-instituicao.component';

describe('CadastrarInstituicaoComponent', () => {
  let component: CadastrarInstituicaoComponent;
  let fixture: ComponentFixture<CadastrarInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarInstituicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
