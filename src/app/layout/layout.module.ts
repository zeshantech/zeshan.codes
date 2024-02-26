import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaIconsComponent } from '../shared/social-media-icons/social-media-icons.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OfferModalComponent } from '../shared/offer-modal/offer-modal.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SocialMediaIconsComponent,
    HeroSectionComponent,
    OfferModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
  ],
})
export class LayoutModule {}
