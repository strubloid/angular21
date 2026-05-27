import { Component, OnInit, signal } from '@angular/core';
// import { Header } from './components/header/header';
// import { Interpolation } from './components/interpolation/interpolation';
// import { Databinding } from './components/databinding/databinding';
// import { Eventbinding } from './components/eventbinding/eventbinding';
// import { Twowaydatabinding } from './components/twowaydatabinding/twowaydatabinding';

import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  // imports: [Header, Interpolation, Databinding, Eventbinding, Twowaydatabinding],
  imports: [CommonModule, RouterOutlet, RouterLink, Login, Register],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  // protected readonly title = signal('frontend');

  constructor(protected authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    console.log('logout');
  }
}
