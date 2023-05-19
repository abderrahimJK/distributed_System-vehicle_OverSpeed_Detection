import { TestBed } from '@angular/core/testing';

import { ImmatriculationService } from './immatriculation.service';

describe('ImmatriculationService', () => {
  let service: ImmatriculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmatriculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
