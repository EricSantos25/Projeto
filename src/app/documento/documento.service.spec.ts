import { TestBed, inject } from '@angular/core/testing';

import { DocumentoService } from './documento.service';

describe('DocumentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentoService]
    });
  });

  it('should be created', inject([DocumentoService], (service: DocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
