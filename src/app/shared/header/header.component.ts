import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  aboutMeClicked = false;
  skillsClicked = false;
  portfolioClicked = false;

  changeStyleBottomLine(clickedSection: string) {
    this.resetMenuVariables();
    if (clickedSection == 'About me') {
      this.aboutMeClicked = true;
    } else if (clickedSection == 'Skills') {
      this.skillsClicked = true;
    } else if (clickedSection == 'Portfolio') {
      this.portfolioClicked = true;
    }
  }

  resetMenuVariables() {
    this.aboutMeClicked = false;
    this.skillsClicked = false;
    this.portfolioClicked = false;
  }
}
