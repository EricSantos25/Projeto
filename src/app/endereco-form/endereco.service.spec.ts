import { TestBed, inject } from '@angular/core/testing';

import { EnderecoService } from '../service/endereco.service';

describe('EnderecoServico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnderecoService]
    });
  });

  it('should be created', inject([EnderecoService], (service: EnderecoService) => {
    expect(service).toBeTruthy();
  }));
});