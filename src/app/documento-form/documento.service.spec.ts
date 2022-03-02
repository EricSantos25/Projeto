import { TestBed, inject } from '@angular/core/testing';

import { DocumentoService } from '../service/documento.service';

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
