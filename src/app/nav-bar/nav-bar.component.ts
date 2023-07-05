import { Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  links:string[]=['Rocky Chen',"About Me","Experience","Skills","Projects",'Contact Me'];
  button:string='Download Resume';
  goto(index:number){
    console.log("goto_"+index);
  }
}
