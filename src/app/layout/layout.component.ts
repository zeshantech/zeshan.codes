import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <app-hero-section></app-hero-section>
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {}
