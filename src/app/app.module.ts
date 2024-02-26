import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { OfferModalComponent } from './shared/offer-modal/offer-modal.component';
import { SocialMediaIconsComponent } from './shared/social-media-icons/social-media-icons.component';
import { HeroSectionComponent } from './layout/hero-section/hero-section.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfferModalComponent,
    SocialMediaIconsComponent,
    HeroSectionComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
