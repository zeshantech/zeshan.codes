import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfferModalComponent } from '../../shared/offer-modal/offer-modal.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  constructor(private dialog: MatDialog) {}

  openOfferModal(): void {
    const dialogRef = this.dialog.open(OfferModalComponent, {
      width: '400px', // Adjust width as needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'toggle') {
      }
    });
  }
}
