import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  appdata = inject(AppdataService);
}
