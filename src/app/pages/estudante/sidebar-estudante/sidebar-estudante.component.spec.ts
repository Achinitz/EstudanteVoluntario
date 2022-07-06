import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEstudanteComponent } from './sidebar-estudante.component';

describe('SidebarEstudanteComponent', () => {
  let component: SidebarEstudanteComponent;
  let fixture: ComponentFixture<SidebarEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEstudanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
