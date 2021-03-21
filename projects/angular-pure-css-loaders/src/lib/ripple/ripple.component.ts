import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
})
export class RippleComponent {
  @Input() color = '#000'
  @Input() secondaryColor = ''

  get border(): string {
    return `border: 4px solid ${this.color}`
  }

  get secondaryBorder(): string {
    return `border: 4px solid ${this.borderSecondaryColor}`
  }

  private get borderSecondaryColor(): string {
    return this.secondaryColor
      ? this.secondaryColor
      : this.color;
  }
}
