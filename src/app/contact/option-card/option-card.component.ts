import { Component } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
})
export class OptionCardComponent {
  byCall() {
    // Implement functionality for making a call
    window.location.href = 'tel:+920364547910';
  }

  byMSTeams() {
    alert('We are in trouble to open ms teams');
  }

  bySkype() {
    // Implement functionality for Skype
    window.location.href = 'skype:live:.cid.237014b36c82910c?call';
  }

}
