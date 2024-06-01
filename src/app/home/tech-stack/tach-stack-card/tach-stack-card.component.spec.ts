import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachStackCardComponent } from './tach-stack-card.component';

describe('TachStackCardComponent', () => {
  let component: TachStackCardComponent;
  let fixture: ComponentFixture<TachStackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TachStackCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TachStackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
