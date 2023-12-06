import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../dataType';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }
  @Input() contents:profile[]={}as profile[];

  ngOnInit(): void {
  }

}
