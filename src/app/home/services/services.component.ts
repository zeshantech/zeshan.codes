import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  public router: Router = inject(Router);

  onApp() {
    console.log('App clicked');
  }

  onDesktop() {
    console.log('Desktop clicked');
  }

  onMore() {
    this.router.navigate(['/services'])
  }

  onWeb() {
    console.log('Web clicked');
  }
}
