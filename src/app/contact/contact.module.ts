import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { LayoutModule } from '../layout/layout.module';
import { OptionCardComponent } from './option-card/option-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ContactRoutingModule } from './contact-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SocialMediaIconsComponent } from '../shared/social-media-icons/social-media-icons.component';
import { MeetingButtonsComponent } from './meeting-buttons/meeting-buttons.component';

@NgModule({
  declarations: [
    ContactComponent,
    OptionCardComponent,
    ContactFormComponent,
    MapComponent,
    MeetingButtonsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    MatCardModule,
    ContactRoutingModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDividerModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    SocialMediaIconsComponent
  ],
})
export class ContactModule {}
