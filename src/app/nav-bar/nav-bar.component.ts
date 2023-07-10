import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() content:string[]=[];
  scroll(index:number) {
    console.log(index);
    if(index==0)
      this.newItemEvent.emit('top');
    else if(index==1)
      this.newItemEvent.emit('card');
    else 
      this.newItemEvent.emit('contact');
  }
}
