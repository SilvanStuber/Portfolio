import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { AppdataService } from '../../appdata.service';


@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {
  appdata = inject(AppdataService);
}  
