import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferModalComponent } from './offer-modal.component';

describe('OfferModalComponent', () => {
  let component: OfferModalComponent;
  let fixture: ComponentFixture<OfferModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
