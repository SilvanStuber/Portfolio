import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './../shared/header/header.component';
import { MobileComponent } from './../shared/mobile/mobile.component';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './../shared/footer/footer.component';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { AppdataService } from '../appdata.service';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MobileComponent,
    AtfComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent implements OnInit {
  appdata = inject(AppdataService);

  /**
   * Initializes the AOS library when the component is initialized.
   * @ngOnInit
   */
  ngOnInit() {
    AOS.init();
  }

  /**
   * Listens for the window scroll event and updates the menu style based on the scroll position.
   * @param {Event} event - The scroll event.
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    this.loadMenuStyleScrollPosition(scrollPosition);
  }

  /**
   * Updates the menu style based on the current scroll position.
   * @param {number} scrollPosition - The current scroll position of the window.
   */
  loadMenuStyleScrollPosition(scrollPosition: number) {
    if (scrollPosition > 500 && scrollPosition < 1100) {
      this.appdata.changeStyleBottomLine('About me');
    } else if (scrollPosition > 1100 && scrollPosition < 1750) {
      this.appdata.changeStyleBottomLine('Skills');
    } else if (scrollPosition > 1750 && scrollPosition < 3850) {
      this.appdata.changeStyleBottomLine('Portfolio');
    } else if (scrollPosition > 3850) {
      this.appdata.changeStyleBottomLine('Contact');
    } else {
      this.appdata.resetMenuVariables();
    }
  }
}
