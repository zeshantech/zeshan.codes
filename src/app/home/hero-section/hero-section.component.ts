import { Component } from '@angular/core';
import { OfferModalComponent } from '../../shared/offer-modal/offer-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  constructor(public dialog: MatDialog) {}

  openOfferModal(): void {
    const dialogRef = this.dialog.open(OfferModalComponent, {
      width: '600px',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  scheduleMeeting() {
    alert("I'm working on it")
  }
}
