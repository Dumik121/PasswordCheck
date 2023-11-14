import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circles-section',
  templateUrl: './circles-section.component.html',
  styleUrls: ['./circles-section.component.scss']
})
export class CirclesSectionComponent {
  @Input() circleClass: string = '';
}
