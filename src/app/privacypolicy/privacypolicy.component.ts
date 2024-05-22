import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from '../appdata.service';import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { MobileComponent } from '../shared/mobile/mobile.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [HeaderComponent, MobileComponent, FooterComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss'
})
export class PrivacypolicyComponent {
  appdata = inject(AppdataService);
  constructor(public router: Router) {
    
  }
  
}
