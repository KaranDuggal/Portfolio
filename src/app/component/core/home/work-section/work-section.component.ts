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
      description: 'It\'s Stream live and on-demand sports anytime, anywhere on your favorite devices.',
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
        "Event Bridge",
        'Postgres DataBase',
        'Cloud Watch'
      ],
      tasks:[
        "Developed an AWS Lambda function to automate the refresh process of materialized views based on different time intervals. This Lambda function retrieves the names of the materialized views to be refreshed from an SQS queue. The table names to be refreshed are provided by a separate configuration ingestion Lambda function.",
        "Implemented real-time pager-duty alerts to ensure timely detection and resolution of live article visibility issues during scheduled kick-off times.",
        "Optimized materialized view refresh performance in RDS by creating a sub table from the main article table, resulting in a remarkable 30% improvement in refresh time.",
        "Expanded rail service functionality by introducing a new provider mode, enhancing article filtering capabilities and enriching user experience.",
        "Troubleshot and resolved bugs in the Rail-Service.(Rail-Service is responsible for content tile.)",
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
        'Design UI from scratch',
        'Yearly subscription functionality add',
        'push notification functionality add',
        'Angular version upgrade from v8 to v16'
      ],
      responsibilities:[
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
        'PostgresDB',
        'MongoDB',
        'Stripe',
        'PayPal Payment Gateway',
        'AWS EC2'
      ],
      tasks:[
        "Troubleshot and resolved bugs in the website.",
        "Add new functionality based on client’s requirement",
        "Implemented an automated testing strategy using Selenium WebDriver to enhance software quality and streamline testing processes.",
        'Improve chat system fix bugs',
        'Fix Subscription auto-renew bug',
        'implement employer-worker interview functionality',
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
        'Mux',
        'MongoDB',
        'AWS EC2',
      ],
      tasks:[
        "Implement mux for live streaming and watching watching videos",
        "Implement group chat system",
        "Implement video lecture, audio lecture, quiz functionality",
        "Implement role-based access control"
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
        "Designing and developing RESTful APIs to serve frontend",
        "Designed database schema for storing healthcare-related data (patients, appointments, treatment’s, diagnosis’s, etc.).",
        "Implemented error handling, input validation, and data sanitization within APIs.",
        "Implement role-based access control"
      ],
      responsibilities:[
       
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
        "Designing and developing RESTful APIs for managing dairy product inventory, orders, deliveries, and user accounts.",
        "implement in-build wallet functionality",
        "Ensuring efficient data storage, retrieval, and management for dairy products, orders, customer information, and delivery logistics.",
        "Creating API endpoints to handle payment requests from the frontend or delivery app.",
        "Convert backend of Himalayan Creamery dairy app from PHP to Node.js: refactor PHP logic, migrate database, develop Node.js APIs, integrate third-party services, test and deploy."
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
        'AWS EC2',
        'S3 bucket'
      ],
      tasks:[
        "Managed backend development and server setup on AWS EC2.",
        "Implemented geo-fencing functionality.",
        "Designed and implemented APIs."
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
      description: 'Interview Panel project: HR effortlessly schedules, edits, and manages interviews, while interviewers efficiently rate candidates. Simplify your hiring process with real-time updates and seamless collaboration',
      link:'',
      tech:[
        'Nodejs',
        'nestjs',
        'MongoDB',
        'mysql',
        'AWS EC2'
      ],
      tasks:[
        "Manage backend and frontend development for the Interview Panel project.",
        "Implement ngx-formly to enhance form reusability and streamline data input.",
        "Implement role-based access control to ensure secure and efficient user management."
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
