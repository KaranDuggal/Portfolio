import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-details-model',
  templateUrl: './project-details-model.component.html',
  styleUrl: './project-details-model.component.scss'
})
export class ProjectDetailsModelComponent {
  @Input() projectDetail:any
  constructor(public activeModal: NgbActiveModal){

  }
}
