import { TestBed } from '@angular/core/testing';

import { OfferModalService } from './offer-modal.service';

describe('OfferModalService', () => {
  let service: OfferModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
