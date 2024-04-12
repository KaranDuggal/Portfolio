import { Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isSidebarVisible:boolean = false;
  changeSidebarStatus(){
    this.isSidebarVisible = !this.isSidebarVisible
  }
}
