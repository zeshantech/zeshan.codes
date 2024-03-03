import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PortfolioComponent, CardComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class PortfolioModule {}
