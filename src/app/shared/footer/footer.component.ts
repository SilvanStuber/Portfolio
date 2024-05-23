import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  appdata = inject(AppdataService);
}
