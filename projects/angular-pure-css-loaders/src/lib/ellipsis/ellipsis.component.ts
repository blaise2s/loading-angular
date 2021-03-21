import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
