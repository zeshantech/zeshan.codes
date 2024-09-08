import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-buttons',
  templateUrl: './meeting-buttons.component.html',
  styleUrls: ['./meeting-buttons.component.css']
})
export class MeetingButtonsComponent {

  redirectToGoogleCalendar(): void {
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Kickoff&add=zeshanshakil0@gmail.com', '_blank');
  }

  redirectToZoom(): void {
    window.open('https://zoom.us/meeting/schedule', '_blank');
  }

  redirectToTeams(): void {
    window.open('https://teams.microsoft.com/_#/scheduling-form/', '_blank');
  }

  redirectToWebex(): void {
    window.open('https://signin.webex.com/meetings', '_blank');
  }
}
