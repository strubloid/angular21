import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrls: ['./interpolation.scss'],
})
export class Interpolation {
  // this is an example of interpolation in Angular, where
  // we bind the appName property to the template
  appName = 'Interpolation in App';

  user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
}
