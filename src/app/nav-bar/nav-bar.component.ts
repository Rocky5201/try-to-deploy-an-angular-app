import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  links:string[]=['Rocky Chen',"Experience","Projects",'About Me'];
  button:string='Download Resume';
  scroll(index:number) {
    console.log(index);
    if(index==0)
      this.newItemEvent.emit('profile');
    else
    this.newItemEvent.emit('card');
  }
}
