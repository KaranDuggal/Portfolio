import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    if(element) this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement|null {
    console.log("element id : ", id);
    // const element = <HTMLElement>document.querySelector(`#${id}`);
    const element = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
