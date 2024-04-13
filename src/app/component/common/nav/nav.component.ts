import { Component} from '@angular/core';
import { ScrollService } from '../../../services/scroll/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(public scrollService: ScrollService){}
  isSidebarVisible:boolean = false;
  changeSidebarStatus(){
    this.isSidebarVisible = !this.isSidebarVisible
  }
}
