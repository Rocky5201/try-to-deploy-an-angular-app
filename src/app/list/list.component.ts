import { Component,Input } from '@angular/core';
import { skill } from '../dataType';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() content:skill={} as skill;
}
