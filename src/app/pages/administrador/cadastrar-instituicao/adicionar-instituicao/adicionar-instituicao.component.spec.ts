import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarInstituicaoComponent } from './adicionar-instituicao.component';

describe('AdicionarInstituicaoComponent', () => {
  let component: AdicionarInstituicaoComponent;
  let fixture: ComponentFixture<AdicionarInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarInstituicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
