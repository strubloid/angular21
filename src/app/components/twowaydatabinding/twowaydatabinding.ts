import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaydatabinding',
  imports: [CommonModule, FormsModule],
  templateUrl: './twowaydatabinding.html',
  styleUrls: ['./twowaydatabinding.scss'],
})
export class Twowaydatabinding {
  username: string = 'rafael';
}
