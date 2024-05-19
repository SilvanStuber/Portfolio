import { CommonModule } from '@angular/common';
import { Component, Output, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appdata = inject(AppdataService);
  
}
