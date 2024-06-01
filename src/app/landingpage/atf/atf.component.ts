import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent {
  appdata = inject(AppdataService);
}
