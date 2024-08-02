import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  technologies :Array<string> = ['Angular', 'NodeJS', 'ExpressJS', 'NestJs', 'MySql', 'Postgres', 'MongoDB', 'DynamoDB', 'GIT', 'AWS', 'Microsoft Azure', 'Flutter', 'DSA', 'EJS', 'HBS','Selenium - Webdriver for automation',]
  projects:Array<string> =['Streaming Platform', 'Healthcare Application', 'Educational Application', 'E-commerce Application', 'Interview panel', 'Freelancing web-site', ]
  experience:number = 4
}
