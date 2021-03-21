import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
