import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tach-stack-card',
  templateUrl: './tach-stack-card.component.html',
  styleUrl: './tach-stack-card.component.scss',
})
export class TachStackCardComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
}
