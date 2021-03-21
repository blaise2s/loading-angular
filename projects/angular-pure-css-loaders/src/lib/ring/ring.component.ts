import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss'],
})
export class RingComponent {
  @Input() color = '#000'
  @Input() secondaryColor = '#000'

  get borderColor(): string {
    return `border-color: ${this.color} transparent transparent transparent`
  }
}
