import { Component, Input } from '@angular/core';
import { profile } from '../dataType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  @Input() content:profile={}as profile;
}
