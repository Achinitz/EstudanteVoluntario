import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVagasComponent } from './buscar-vagas.component';

describe('BuscarVagasComponent', () => {
  let component: BuscarVagasComponent;
  let fixture: ComponentFixture<BuscarVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
