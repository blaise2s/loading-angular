import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.scss'],
})
export class HourglassComponent {
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
