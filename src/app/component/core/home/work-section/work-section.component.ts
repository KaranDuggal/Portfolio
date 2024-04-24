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
      description: 'Led redesign of DAZN website, optimizing UI/UX for enhanced sports streaming experience. Implemented responsive layouts, intuitive navigation, and dynamic content modules. Contributed to increased user engagement and satisfaction.',
      link:'https://www.dazn.com/',
      tech:[
        'Nodejs',
        'TypeScript',
        'javaScript',
        'lambda',
        'Kinesis Data Streams',
        'SNS',
        'SQS',
        'DynamoDB',
        'RDS',
        'Postgres DataBase',
        'Cloud Watch'
      ],
      tasks:[
        "Troubleshot and resolved bugs in the Rail-Service.",
        "Implemented real-time pager-duty alerts to ensure timely detection and resolution of live article visibility issues during scheduled kick-off times.",
        "Optimized materialized view refresh performance in RDS by creating a sub table from the main article table, resulting in a remarkable 30% improvement in refresh time.",
        "Expanded rail service functionality by introducing a new provider mode, enhancing article filtering capabilities and enriching user experience.",
        "Developed an automated monitoring solution using Puppeteer, enabling seamless screenshot capture of the homepage to monitor real-time updates and ensure optimal visibility of live articles.",
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
      description: `Prosmarketplace serves as your gateway to remote job opportunities. Whether you're a freelancer seeking new projects or an employer in need of talented professionals, Prosmarketplace offers a platform where you can connect and collaborate seamlessly. Explore remote job listings and start your search for the perfect opportunity today.`,
      link:'https://prosmarketplace.com/',
      tech:[
        'Angular',
        'Nodejs',
        'TypeScript',
        'JavaScript',
        'ExpressJs',
        'socket.io',
        'Postgres Database',
        'MongoDB',
        'Stripe',
        'AWS EC2'
      ],
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
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      link:'https://remoteco.com/',
      tech:[
        'Angular',
        'Nodejs',
        'TypeScript',
        'JavaScript',
        'ExpressJs',
        'socket.io',
        'Postgres Database',
        'MongoDB',
        'Stripe',
        'AWS EC2'
      ],
      tasks:[
        "Troubleshot and resolved bugs in the website.",
        "Add new functionality based on client’s requirement",
        "Implemented an automated testing strategy using Selenium WebDriver to enhance software quality and streamline testing processes.",
        "Angular is being used on the front-end. On the back-end, ExpressJs, Postgres, and MongoDB are used. and Jira for task management.",
      ],
      responsibilities:[
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
      description: 'Remoteco.com served as the predecessor to Prosmarketplace.com,',
      link:'https://www.onpurposecubed.com/',
      tech:[
        'Nodejs'
      ],
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
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      link:'',
      tech:[
        'Nodejs'
      ],
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
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      link:'https://play.google.com/store/apps/details?id=com.mrmilkman.himalayancreamery',
      tech:[
        'Nodejs'
      ],
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
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      link:'',
      tech:[
        'Nodejs'
      ],
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
