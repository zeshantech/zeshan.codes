import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() description!: string;
  @Input() name!: string;
  @Input() playStoreLink?: string; // make it optional
  @Input() ratings?: number; // make it optional
  @Input() imageUrl!: string;
  @Input() appStoreLink?: string; // make it optional
  @Input() webLink?: string; // make it optional
}

export interface ICardProps {
  description: string;
  name: string;
  playStoreLink?: string;
  ratings?: number;
  imageUrl: string;
  appStoreLink?: string;
  webLink?: string;
}