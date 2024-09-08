import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TawkService {
  private isLoaded = false;

  constructor() {}

  load(): void {
    if (this.isLoaded) return; // Prevent loading the script multiple times

    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66c707edea492f34bc08de2b/1i5sndun4';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    this.isLoaded = true; // Mark as loaded
  }
}