import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoComponentesComponent } from './endereco-componentes.component';

describe('EnderecoComponentesComponent', () => {
  let component: EnderecoComponentesComponent;
  let fixture: ComponentFixture<EnderecoComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
