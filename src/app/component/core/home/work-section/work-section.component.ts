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
      description: 'Stream live and on-demand sports anytime, anywhere on your favorite devices.',
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
        "Troubleshot and resolved bugs in the Rail-Service.(Rail-Service is responsible for content tile.)",
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
      description: `ProsMarketplace is improved version of remoteco. it connects businesses with remote workers in Latin America for tasks like virtual assistance, graphic design, and web development.  In short, it's a platform to hire remote freelancers in Latin America.`,
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
      description: `Remoteco connects businesses with remote workers in Latin America for tasks like virtual assistance, graphic design, and web development.  In short, it's a platform to hire remote freelancers in Latin America.`,
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
        'PayPal Payment Gateway',
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
      description: 'Empowered emerging leaders through a Learn-Live-Lead program, fostering positive impact in faith-based communities.',
      link:'https://www.onpurposecubed.com/',
      tech:[
        'Angular',
        'NodeJs',
        'ExpressJs',
        'Socket.io',
        'MongoDB',
        'AWS EC2',
        'Mux',
      ],
      tasks:[
        "this is my task"
      ],
      responsibilities:[
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
      projectName: 'Health care Application',
      description: 'Empowering data-driven healthcare. Secure patient data management for informed diagnoses & treatment.',
      link:'',
      tech:[
        'Angular',
        'Nodejs',
        'ExpressJs',
        'MongoDB',
        'AWS EC2'
      ],
      tasks:[
        "this is my task"
      ],
      responsibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/health-care/health-care-1.png',
        'assets/images/health-care/health-care-2.png',
        'assets/images/health-care/health-care-3.png'
      ]
    },
    {
      projectName: 'Himalayan Creamery',
      description: 'Delivering fresh, pure milk straight from the farm to your doorstep. Order, schedule deliveries, and manage your account conveniently.',
      link:'https://play.google.com/store/apps/details?id=com.mrmilkman.himalayancreamery',
      tech:[
        'Nodejs',
        'ExpressJs',
        'PayPal Payment Gateway',
        'AWS EC2'
      ],
      tasks:[
        "this is my task"
      ],
      responsibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/himalayan-creamery/himalayan-creamery-1.png',
        'assets/images/himalayan-creamery/himalayan-creamery-2.png'
      ]
    },
    {
      projectName: 'Popt',
      description: 'PoptScan is a dynamic property selling platform designed to help users find their ideal home based on various factors such as lifestyle, luxury, mindset, and value. With a user-friendly interface and advanced search features',
      link:'https://poptscan.link/',
      tech:[
        'Nodejs',
        'MongoDB',
        'AWS EC2'
      ],
      tasks:[
        "this is my task"
      ],
      responsibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/popt/popt-1.png',
        'assets/images/popt/popt-2.png'
      ]
    },
    {
      projectName: 'Interview Panel',
      description: 'PoptScan is a dynamic property selling platform designed to help users find their ideal home based on various factors such as lifestyle, luxury, mindset, and value. With a user-friendly interface and advanced search features',
      link:'',
      tech:[
        'Nodejs',
        'MongoDB',
        'AWS EC2'
      ],
      tasks:[
        "this is my task"
      ],
      responsibilities:[
        'this is my responsibilities'
      ],
      images:[
        'assets/images/interview-panel/interview-panel-1.png',
        'assets/images/interview-panel/interview-panel-2.png',
        'assets/images/interview-panel/interview-panel-3.png',
      ]
    }
  ] 
  works:Array<any> = this.mainWork.splice(0,6)
  openProjectDetails(projectDetail:any){
    const modalRef = this.ngbModal.open(ProjectDetailsModelComponent,{size: 'lg', windowClass: 'modal-xl'});
    modalRef.componentInstance.projectDetail = projectDetail;
  }
  loadMore(){
    this.works.push(...this.mainWork.splice(0,3))
  }
}
