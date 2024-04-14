import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  @Input() ID!: number;
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() likesCount!: number;
  @Input() commentsCount!: number;

  constructor(private router: Router) {}

  navigateToBlog() {
    this.router.navigate(['/blogs', this.ID]);
  }
}
