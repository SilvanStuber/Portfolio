import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './../shared/header/header.component';
import { MobileComponent } from './../shared/mobile/mobile.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { AppdataService } from '../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MobileComponent, FooterComponent, TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  appdata = inject(AppdataService);
  }

