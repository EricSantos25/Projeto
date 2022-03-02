import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponentesComponent } from './cadastro-componentes.component';

describe('CadastroComponentesComponent', () => {
  let component: CadastroComponentesComponent;
  let fixture: ComponentFixture<CadastroComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
