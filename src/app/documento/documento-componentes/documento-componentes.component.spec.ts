import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoComponentesComponent } from './documento-componentes.component';

describe('DocumentoComponentesComponent', () => {
  let component: DocumentoComponentesComponent;
  let fixture: ComponentFixture<DocumentoComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
