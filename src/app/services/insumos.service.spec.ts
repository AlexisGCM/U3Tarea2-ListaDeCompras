import { TestBed } from '@angular/core/testing';

import { InsumoService } from './insumos.service';

describe('InsumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsumoService = TestBed.get(InsumosService);
    expect(service).toBeTruthy();
  });
});
