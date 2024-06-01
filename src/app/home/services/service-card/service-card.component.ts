import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() clicks!: number;
  @Output() onClick = new EventEmitter<void>();
}
