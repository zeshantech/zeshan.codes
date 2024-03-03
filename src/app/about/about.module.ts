import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AboutComponent, HeroComponent, CardComponent],
  imports: [CommonModule, AboutRoutingModule, MatButtonModule],
})
export class AboutModule {}
