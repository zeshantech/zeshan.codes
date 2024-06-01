import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageItemComponent } from './languages/language-item/language-item.component';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { TachStackCardComponent } from './tech-stack/tach-stack-card/tach-stack-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DevelopmentApproachComponent } from './development-approach/development-approach.component';
import { DevelopmentApproachCardComponent } from './development-approach/development-approach-card/development-approach-card.component';
import { AlcalineWorksComponent } from './alcaline-works/alcaline-works.component';
import { AlcalineWorkCardComponent } from './alcaline-works/alcaline-work-card/alcaline-work-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    LanguagesComponent,
    LanguageItemComponent,
    ServicesComponent,
    ServiceCardComponent,
    TechStackComponent,
    DevelopmentApproachComponent,
    DevelopmentApproachCardComponent,
    TachStackCardComponent,
    AlcalineWorksComponent,
    AlcalineWorkCardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    LayoutModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatDividerModule,
    MatTabsModule,
  ],
})
export class HomeModule {}
