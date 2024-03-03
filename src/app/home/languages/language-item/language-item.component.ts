import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrl: './language-item.component.css',
})
export class LanguageItemComponent {
  @Input() title!: string;
  @Input() initialValue!: number;

  onSliderChange(event: any) {
    this.initialValue = event.target.value;
  }
}
