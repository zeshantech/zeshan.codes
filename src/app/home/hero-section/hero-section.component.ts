import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferModalComponent } from '../../shared/offer-modal/offer-modal.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  meetingTitle: string = '';
  guestEmail: string = '';
  meetingDate: string = '';

  constructor(public dialog: MatDialog) { }

  openOfferModal(): void {
    const dialogRef = this.dialog.open(OfferModalComponent, {
      width: '600px',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  redirectToCalender(): void {
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Kickoff&add=zeshanshakil0@gmail.com', '_blank');
  }
}
