import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
})
export class HeartComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
