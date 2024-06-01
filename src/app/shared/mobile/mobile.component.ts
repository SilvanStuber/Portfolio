import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { AppdataService } from '../../appdata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [HeaderComponent, CommonModule, TranslateModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss',
})
export class MobileComponent {
  appdata = inject(AppdataService);

  /**
   * Closes the menu by setting the menuIsOpen property to false.
   * It also sets the imageHeaderNotVisible property to false.
   */
  closeMenu() {
    this.appdata.menuIsOpen = false;
    this.appdata.imageHeaderNotVisible = false;
  }
}
