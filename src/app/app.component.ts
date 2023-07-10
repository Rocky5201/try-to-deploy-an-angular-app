import { Component } from '@angular/core';
import {contactMock, navMock, profileMock, projectsMock, skillsMock} from'../app/mockData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  nav=navMock;
  
  profile=profileMock;
  
  skills=skillsMock;

  projects= projectsMock;

  contact=contactMock;

  scrollTo(className: string):void {
    if(className=='top'){
      window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
      });
    }
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
