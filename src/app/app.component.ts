import { Component } from '@angular/core';
import { TawkService } from './tawk/tawk.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'agular';
  constructor(private tawkService: TawkService) {}

  ngOnInit(): void {
    this.tawkService.load(); // Load the Tawk.to script
  }
}
