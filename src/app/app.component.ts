import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  public isCollapsed = true;
  skills:Array<String> = ['Angular', 'NodeJS', 'ExpressJS', 'NestJs ', 'Socket.io', 'RXJS', 'Postgres', 'MySql', 'MongoDB', 'JavaScript', 'TypeScript', 'Flutter', 'GIT', 'Jira', 'AWS Data Streams', 'AWS', 'Lambda', 'DynamoDB', 'RDS', 'Docker', 'Microsoft Azure', 'DSA', 'Selenium - webdriver']
}
