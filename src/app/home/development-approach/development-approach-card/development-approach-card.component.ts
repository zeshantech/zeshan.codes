import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-development-approach-card',
  templateUrl: './development-approach-card.component.html',
})
export class DevelopmentApproachCardComponent {
  @Input() description!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
}
