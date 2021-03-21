import { Component, Input } from '@angular/core';

@Component({
  selector: 'pcl-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent {
  @Input() color = '#000'

  get background(): string {
    return `background: ${this.color}`
  }
}
