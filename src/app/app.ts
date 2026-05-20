import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Interpolation } from './components/interpolation/interpolation';
import { Databinding } from './components/databinding/databinding';
import { Eventbinding } from './components/eventbinding/eventbinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Interpolation, Databinding, Eventbinding],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('frontend');
}
