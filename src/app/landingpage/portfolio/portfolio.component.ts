import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  appdata = inject(AppdataService);
}
