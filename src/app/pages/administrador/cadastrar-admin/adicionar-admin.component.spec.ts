import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAdminComponent } from './adicionar-admin.component';

describe('AdicionarAdminComponent', () => {
  let component: AdicionarAdminComponent;
  let fixture: ComponentFixture<AdicionarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
