import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [ServicesComponent, CardComponent, HeroSectionComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ServicesModule {}
