import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  fontColorBlue = 'rgba(75, 71, 255, 1)';
  fontColorWhite = 'rgba(255, 255, 254, 1)';
}
