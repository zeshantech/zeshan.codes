import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() imageUrl!: string;
  @Output() onContinue = new EventEmitter<void>();

  handleContinue(): void {
    this.onContinue.emit();
  }
}
