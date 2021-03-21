import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-dual-ring',
  templateUrl: './dual-ring.component.html',
  styleUrls: ['./dual-ring.component.scss'],
})
export class DualRingComponent {
  @Input() color = '#000'
  @Input() secondaryColor = '';

  private get borderSecondaryColor(): string {
    return this.secondaryColor
      ? this.secondaryColor
      : this.color;
  }

  get borderColor(): string {
    return `border-color: ${this.color} transparent ${this.borderSecondaryColor} transparent`;
  }
}
