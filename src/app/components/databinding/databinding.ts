import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrls: ['./databinding.scss'],
})
export class Databinding {
  // here is an example of property binding, where we bind the src, width, height and
  // alt attributes of the img element to the corresponding properties in the component class
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageWidth = 220;
  imageHeight = 220;
  imageTitle = 'Image title';
}
