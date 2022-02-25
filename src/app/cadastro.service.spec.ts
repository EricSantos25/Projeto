import { TestBed, inject } from '@angular/core/testing';

import { CadastroService } from './services/cadastro.service';

describe('CadastroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroService]
    });
  });

  it('should be created', inject([CadastroService], (service: CadastroService) => {
    expect(service).toBeTruthy();
  }));
});
