import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  content={
    image:"../../assets/robot.jpg",
    link:'https://icat.vt.edu/projects/2015-2016/major/escher-humanoid-robot.html',
    topie:"Humanoid Robot",
    action:"MORE",
    paragraph:"Robot was intended to be entered into US Navycompetition to assist in firefighting sea rescues."
  };

  newWindow(){
    window.open(this.content.link, '_blank' );
  }
}
