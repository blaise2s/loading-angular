import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
