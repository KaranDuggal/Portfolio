import { Component } from '@angular/core';
import { AlertService } from "../../../../services/alert/alert.service";
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  constructor(
    private alertService:AlertService
  ){}
  submit(){
    this.alertService.ok('I apologize for the inconvenience caused by the mail server not working. In the meantime, feel free to reach out to me on LinkedIn or Instagram.')
  }
}
