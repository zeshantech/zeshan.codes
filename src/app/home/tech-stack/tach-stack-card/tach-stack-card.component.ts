import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tach-stack-card',
  templateUrl: './tach-stack-card.component.html',
  styleUrl: './tach-stack-card.component.scss',
})
export class TachStackCardComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() proficiency!: number;

  getProgressBorder(score: number): string {
    const percentage = Math.min(Math.max(score, 0), 100);

    return `conic-gradient(from 315deg at 50% 50%, rgba(63, 81, 181) ${percentage}%,  rgba(63, 81, 181, 0) ${
      percentage + 2
    }%)`;
  }
}
