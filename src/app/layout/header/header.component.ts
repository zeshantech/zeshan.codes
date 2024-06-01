import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  get darkTheme(): boolean {
    return document.documentElement.getAttribute('theme') === 'dark';
  }

  toggleTheme() {
    if (this.darkTheme) {
      document.documentElement.setAttribute('theme', '');
    } else {
      document.documentElement.setAttribute('theme', 'dark');
    }
  }
}
