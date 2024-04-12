import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  title = 'portfolio';
  public isCollapsed = true;
  skills:Array<string> = ['Angular', 'NodeJS', 'ExpressJS', 'NestJs ', 'Socket.io', 'RXJS', 'Postgres', 'MySql', 'MongoDB', 'JavaScript', 'TypeScript', 'Flutter', 'GIT', 'Jira', 'AWS Data Streams', 'AWS', 'Lambda', 'DynamoDB', 'RDS', 'Docker', 'Microsoft Azure', 'DSA', 'Selenium - webdriver']
  
}
