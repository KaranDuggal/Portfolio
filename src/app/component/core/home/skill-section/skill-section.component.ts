import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {
  skills:Array<string> = ['Angular', 'NodeJS', 'ExpressJS', 'NestJs ', 'Socket.io', 'RXJS', 'Postgres', 'MySql', 'MongoDB', 'JavaScript', 'TypeScript', 'Flutter', 'GIT', 'Jira', 'AWS Data Streams', 'AWS', 'Lambda', 'DynamoDB', 'SQS', 'DLQ', 'RDS', 'Docker', 'Microsoft Azure', 'Terraform', 'DSA', 'Selenium - webdriver']

}
