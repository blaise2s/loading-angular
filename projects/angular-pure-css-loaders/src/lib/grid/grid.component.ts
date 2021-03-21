import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
