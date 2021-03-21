import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.scss'],
})
export class RollerComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
