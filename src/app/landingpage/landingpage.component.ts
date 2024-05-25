import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    AOS.init();
  }
}
