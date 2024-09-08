import { TestBed } from '@angular/core/testing';

import { TawkService } from './tawk.service';

describe('TawkService', () => {
  let service: TawkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TawkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
