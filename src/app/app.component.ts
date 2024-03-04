import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-talk></app-talk>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'agular';
}
