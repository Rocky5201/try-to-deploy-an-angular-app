import { Component, Input} from '@angular/core';
import { projects } from '../dataType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() content:projects= {} as projects;

  newWindow(){
    if(this.content.link)
      window.open(this.content.link, '_blank' );
  }
}
