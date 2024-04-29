import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AtfComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
