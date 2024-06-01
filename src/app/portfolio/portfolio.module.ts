import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [PortfolioComponent, CardComponent, HeroSectionComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
})
export class PortfolioModule {}
