import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  appdata = inject(AppdataService);
}
