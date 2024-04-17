import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsModelComponent } from '../../../common/models/project-details/project-details-model.component';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss'
})
export class WorkSectionComponent {
  constructor(private ngbModal: NgbModal){
    
  }
  mainWork:Array<any> = [
    {
      projectName: 'DAZN',
      shortDescription: 'test',
      description: 'Led redesign of DAZN website, optimizing UI/UX for enhanced sports streaming experience. Implemented responsive layouts, intuitive navigation, and dynamic content modules. Contributed to increased user engagement and satisfaction.',
      tasks:[
        "this is my task"
      ],
      responsibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/dazn/dazn-1.png',
        'assets/images/dazn/dazn-2.png',
        'assets/images/dazn/dazn-3.png',
        'assets/images/dazn/dazn-4.png',
        'assets/images/dazn/dazn-5.png',
        'assets/images/dazn/dazn-6.png'
      ]
    },
    {
      projectName: 'Prosmarketplace.com',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/prosmarketplace/prosmarketplace-1.png',
        'assets/images/prosmarketplace/prosmarketplace-2.png',
        'assets/images/prosmarketplace/prosmarketplace-3.png',
        'assets/images/prosmarketplace/prosmarketplace-4.png',
        'assets/images/prosmarketplace/prosmarketplace-5.png',
      ]
    },
    {
      projectName: 'Remoteco.com',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/remoteco/remoteco-1.png',
        'assets/images/remoteco/remoteco-2.png',
        'assets/images/remoteco/remoteco-3.png',
        'assets/images/remoteco/remoteco-4.png',
        'assets/images/remoteco/remoteco-5.png',
        'assets/images/remoteco/remoteco-6.png'
      ]
    },
    {
      projectName: 'Onpurposecubed',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/onpurposecubed/lms-1.png',
        'assets/images/onpurposecubed/lms-2.png',
        'assets/images/onpurposecubed/lms-3.png',
        'assets/images/onpurposecubed/lms-4.png',
        'assets/images/onpurposecubed/lms-5.png',
        'assets/images/onpurposecubed/lms-6.png',
        'assets/images/onpurposecubed/lms-7.png',
        'assets/images/onpurposecubed/lms-8.png'
      ]
    },
    {
      projectName: 'OnpurposeLMS',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/dazn/dazn-1.png',
        'assets/images/dazn/dazn-2.png',
        'assets/images/dazn/dazn-3.png',
        'assets/images/dazn/dazn-4.png',
        'assets/images/dazn/dazn-5.png',
        'assets/images/dazn/dazn-6.png'
      ]
    },
    {
      projectName: 'Himalayan Creamery',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/himalayan-creamery/himalayan-creamery-1.png',
        'assets/images/himalayan-creamery/himalayan-creamery-2.png'
      ]
    },
    {
      projectName: 'Himalayan Creamery',
      shortDescription: 'test',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      tasks:[
        "this is my task"
      ],
      resposibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/himalayan-creamery/himalayan-creamery-1.png',
        'assets/images/himalayan-creamery/himalayan-creamery-2.png'
      ]
    }
  ] 
  works:Array<any> = this.mainWork.splice(0,3)
  openProjectDetails(projectDetail:any){
    const modalRef = this.ngbModal.open(ProjectDetailsModelComponent,{size: 'lg', windowClass: 'modal-xl'});
    modalRef.componentInstance.projectDetail = projectDetail;
  }
  loadMore(){
    this.works.push(...this.mainWork.splice(0,3))
  }
}
