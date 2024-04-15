import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() showNavigationArrows:boolean = false
  @Input() showNavigationIndicators:boolean = false
  @Input() images:Array<string> = []
}
