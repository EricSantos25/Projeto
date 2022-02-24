import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponentesComponent } from './admin-componentes.component';

describe('AdminComponentesComponent', () => {
  let component: AdminComponentesComponent;
  let fixture: ComponentFixture<AdminComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
