import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss'
})
export class WorkSectionComponent {
  works:Array<any> = [
    {
      projectName: 'DAZN',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    },
    {
      projectName: 'Remoteco.com',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    },
    {
      projectName: 'Prosmarketplace.com/',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    },
    {
      projectName: 'EventFy',
      description: 'The Shiba Inu is the smallest of the',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    },
    {
      projectName: 'OnpurposeLMS',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    },
    {
      projectName: 'DAZN',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      images:[
        'assets/images/dazn-1.png',
        'assets/images/dazn-2.png',
        'assets/images/dazn-3.png',
        'assets/images/dazn-4.png',
        'assets/images/dazn-5.png',
        'assets/images/dazn-6.png'
      ]
    }
  ]
}
