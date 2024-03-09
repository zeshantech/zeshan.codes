import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SkillsComponent } from './skills/skills.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageItemComponent } from './languages/language-item/language-item.component';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    SkillsComponent,
    LanguagesComponent,
    LanguageItemComponent,
    ServicesComponent,
    ServiceCardComponent,
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
    MatProgressSpinnerModule,
  ],
})
export class HomeModule {}
