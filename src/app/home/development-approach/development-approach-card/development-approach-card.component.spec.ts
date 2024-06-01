import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentApproachCardComponent } from './development-approach-card.component';

describe('DevelopmentApproachCardComponent', () => {
  let component: DevelopmentApproachCardComponent;
  let fixture: ComponentFixture<DevelopmentApproachCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopmentApproachCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmentApproachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
