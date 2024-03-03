import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css'
})
export class SkillItemComponent {
  @Input() title!: string;
  @Input() initialValue!: number;

  onSliderChange(event: any) {
    this.initialValue = event.target.value;
  }
}
