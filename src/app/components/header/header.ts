import { Component } from '@angular/core';

// Decorator Component to define the header component
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // this is an example of interpolation in Angular, where
  // we bind the appName property to the template
  appName = 'Interpolation in App';
}
