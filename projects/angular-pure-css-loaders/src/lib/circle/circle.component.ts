import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
