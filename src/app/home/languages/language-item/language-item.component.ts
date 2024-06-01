import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
})
export class LanguageItemComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() initialValue!: number;

  onSliderChange(event: any) {
    this.initialValue = event.target.value;
  }
}
