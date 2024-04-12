import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  public isCollapsed = true;
  skills:Array<string> = ['Angular', 'NodeJS', 'ExpressJS', 'NestJs ', 'Socket.io', 'RXJS', 'Postgres', 'MySql', 'MongoDB', 'JavaScript', 'TypeScript', 'Flutter', 'GIT', 'Jira', 'AWS Data Streams', 'AWS', 'Lambda', 'DynamoDB', 'RDS', 'Docker', 'Microsoft Azure', 'DSA', 'Selenium - webdriver']
  companies:Array<string> = ['DAZN', 'Talentelgia Technology', 'Gsbitlabs']
  selectedCompany: string = 'DAZN'
  companyExperience :any = {
    'DAZN' :{
      position: 'Software Engineer',
      duration: "Sep 2023 - Present",
      responsibilities: [
        'Troubleshot and resolved bugs in the Rail-Service.',
        'Implemented real-time pager-duty alerts to ensure timely detection and resolution of live article visibility issues during scheduled kick-off times.',
        'Optimized materialized view refresh performance in RDS by creating a sub table from the main article table, resulting in a remarkable 30% improvement in refresh time.',
        'Expanded rail service functionality by introducing a new provider mode, enhancing article filtering capabilities and enriching user experience.',
        'Developed an automated monitoring solution using Puppeteer, enabling seamless screenshot capture of the homepage to monitor real-time updates and ensure optimal visibility of live articles.'
      ]
    },
    'Talentelgia Technology':{
      position: 'Software Engineer',
      duration: "July 2022 - Aug 2023",
      responsibilities: [
        'Troubleshoot and resolve bugs in RemoteCo and Eventsfy platforms.',
        'Implement new features based on client requirements.',
        'Implement automated testing strategy using Selenium WebDriver.',
        'Facilitate knowledge transfer and mentor junior developers.',
        'Design and implement user-friendly interfaces for Interview Panel.',
        'Implement role-based access control for Interview Panel users.',
        'Develop candidate management features for Interview Panel.',
      ]
    },
    'Gsbitlabs':{
      position: 'Full Stack Developer',
      duration: "Jan 2021 - May 2022",
      responsibilities: [
        'Managed back-end development for OnPurposeCUBED learning platform, ensuring optimal performance.',
        'Configured server infrastructure on Microsoft Azure for OnPurposeCUBED, ensuring reliable deployment.',
        'Collaborated with front-end team to integrate back-end functionalities seamlessly for OnPurposeCUBED.',
        'Managed back-end development for PoptScan property selling platform, utilizing Node.js and MongoDB.',
        'Configured server infrastructure on AWS EC2 for deploying PoptScan project.',
        'Converted PHP backend to Node.js for Himalayan Creamery project, improving performance and scalability.',
        'Led development and implementation of healthcare application, managing both front-end and back-end aspects.',
      ]
    }
  }
}
