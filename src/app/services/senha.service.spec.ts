import { TestBed, inject } from '@angular/core/testing';

import { SenhaService } from './senha.service';

describe('SenhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenhaService]
    });
  });

  it('should be created', inject([SenhaService], (service: SenhaService) => {
    expect(service).toBeTruthy();
  }));
});
