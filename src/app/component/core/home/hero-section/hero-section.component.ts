import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll/scroll.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(public scrollService: ScrollService){
    
  }
}
