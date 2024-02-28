import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    LayoutModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
