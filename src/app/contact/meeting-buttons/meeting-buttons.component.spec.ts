import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingButtonsComponent } from './meeting-buttons.component';

describe('MeetingButtonsComponent', () => {
  let component: MeetingButtonsComponent;
  let fixture: ComponentFixture<MeetingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
