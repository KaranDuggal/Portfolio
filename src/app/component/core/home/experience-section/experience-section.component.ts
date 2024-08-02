import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  companies:Array<string> = ['DAZN', 'Talentelgia Technology', 'Gsbitlabs']
  selectedCompany: string = 'DAZN'
  companyExperience :any = {
    'DAZN' :{
      position: 'Software Engineer',
      duration: "Sep 2023 - Present",
      responsibilities: [
        "Developed an AWS Lambda function to automate the refresh process of materialized views based on different time intervals. This Lambda function retrieves the names of the materialized views to be refreshed from an SQS queue. The table names to be refreshed are provided by a separate configuration ingestion Lambda function.",
        'Implemented real-time pager-duty alerts to ensure timely detection and resolution of live article visibility issues during scheduled kick-off times.',
        'Optimized materialized view refresh performance in RDS by creating a sub table from the main article table, resulting in a remarkable 30% improvement in refresh time.',
        'Expanded rail service functionality by introducing a new provider mode, enhancing article filtering capabilities and enriching user experience.',
        'Troubleshot and resolved bugs in the Rail-Service.',
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
