import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador.component';

describe('MeuPerfilAdministradorComponent', () => {
  let component: MeuPerfilAdministradorComponent;
  let fixture: ComponentFixture<MeuPerfilAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPerfilAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
