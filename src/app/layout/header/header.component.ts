import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  get lightTheme(): boolean {
    return document.documentElement.getAttribute('theme') === 'light';
  }

  toggleTheme() {
    if (this.lightTheme) {
      document.documentElement.setAttribute('theme', '');
    } else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }
}
