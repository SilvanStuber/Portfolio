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

  /**
   * Updates the style of the bottom line based on the section clicked.
   * Resets all menu related variables and sets the clicked section variable 
   * to true.
   *
   * @param {string} clickedSection - The name of the section that was clicked. 
   * Possible values are 'About me', 'Skills', 'Portfolio'.
   */
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

  /**
   * Resets the menu variables to false for all sections 
   * ('About me', 'Skills', 'Portfolio').
   */
  resetMenuVariables() {
    this.aboutMeClicked = false;
    this.skillsClicked = false;
    this.portfolioClicked = false;
  }
}
