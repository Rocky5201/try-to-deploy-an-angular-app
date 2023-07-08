import { Component, Input} from '@angular/core';
import { contact } from '../dataType';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() content:contact={} as contact;
  newWindow(){
    if(this.content.link)
      window.open(this.content.link, '_blank' );
  }
}
