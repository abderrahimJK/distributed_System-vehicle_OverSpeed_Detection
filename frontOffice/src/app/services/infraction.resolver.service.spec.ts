import { TestBed } from '@angular/core/testing';

import { Infraction.ResolverService } from './infraction.resolver.service';

describe('Infraction.ResolverService', () => {
  let service: Infraction.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Infraction.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
