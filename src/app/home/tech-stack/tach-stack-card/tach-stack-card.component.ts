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

    // return `linear-gradient(90deg, rgba(63,81,181,1) ${percentage/2}%, rgba(63,81,181,0.8758096988795518) {88}%, rgba(0,243,255,0) 100%)`

    return `conic-gradient(90deg, rgba(63,81,181,1) ${percentage}%, rgba(0,243,255,0) 100%)`;

    // return `conic-gradient(#3f51b5 ${percentage}%, transparent ${percentage}% 100%)`;
  }
}
