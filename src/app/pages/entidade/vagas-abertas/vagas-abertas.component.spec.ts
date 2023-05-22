import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasAbertasComponent } from './vagas-abertas.component';

describe('VagasAbertasComponent', () => {
  let component: VagasAbertasComponent;
  let fixture: ComponentFixture<VagasAbertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasAbertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
