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
  contactClicked = false;
  menuContents = [
    {
      linkComponent: '#aboutMe',
      title: 'About me',
    },
    {
      linkComponent: '#skills',
      title: 'Skills',
    },
    {
      linkComponent: '#portfolio',
      title: 'Portfolio',
    },
    {
      linkComponent: '#contact',
      title: 'Contact',
    },
  ];

  /**
   * Updates the style of the bottom line based on the section clicked.
   * Resets all menu related variables and sets the clicked section variable
   * to true.
   *
   * @param {string} clickedSection - The name of the section that was clicked.
   * Possible values are 'About me', 'Skills', 'Portfolio'.
   */
  changeStyleBottomLine(clickedSection: string) {
    console.log(this.aboutMeClicked);
    this.resetMenuVariables();
    if (clickedSection == 'About me') {
      this.aboutMeClicked = true;
    } else if (clickedSection == 'Skills') {
      this.skillsClicked = true;
    } else if (clickedSection == 'Portfolio') {
      this.portfolioClicked = true;
    } else if (clickedSection == 'Contact') {
      this.contactClicked = true;
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
    this.contactClicked = false;
  }

  /**
   * Checks if the section is active based on the clicked state.
   *
   * @param {string} title - The title of the section to check.
   * @returns {boolean} - True if the section is active, otherwise false.
   */
  classActive(title: string): boolean {
    if (title == 'About me') {
      return this.aboutMeClicked;
    } else if (title == 'Skills') {
      return this.skillsClicked;
    } else if (title == 'Portfolio') {
      return this.portfolioClicked;
    } else if (title == 'Contact') {
      return this.contactClicked;
    }
    return false;
  }
}
