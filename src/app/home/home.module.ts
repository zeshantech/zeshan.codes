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
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageItemComponent } from './languages/language-item/language-item.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, SkillsComponent, LanguagesComponent, LanguageItemComponent, SkillItemComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    LayoutModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {}
