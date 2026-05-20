import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.html',
  styleUrls: ['./eventbinding.scss'],
})
export class Eventbinding {
  onClick = () => {
    alert('Button clicked!');
  };
}
