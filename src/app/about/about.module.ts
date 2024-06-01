import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [AboutComponent, CardComponent, HeroSectionComponent],
  imports: [CommonModule, AboutRoutingModule, MatButtonModule],
})
export class AboutModule {}
