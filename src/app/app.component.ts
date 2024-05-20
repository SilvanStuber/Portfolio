import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileComponent } from './shared/mobile/mobile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
