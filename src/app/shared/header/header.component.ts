import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appdata = inject(AppdataService);

  /**
   * Opens the menu by setting the menuIsOpen property to true.
   * After a delay of 225 milliseconds, it sets the imageHeaderNotVisible property to true.
   */
  openMenu() {
    this.appdata.menuIsOpen = true;
    setTimeout(() => {
      this.appdata.imageHeaderNotVisible = true;
    }, 440);
  }
}
