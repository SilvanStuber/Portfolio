import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AppdataService {
  constructor(public router: Router, public translate: TranslateService) {}
  email = 'info@silvanstuber.ch';
  menuIsOpen = false;
  imageHeaderNotVisible = false;
  aboutMeClicked = false;
  skillsClicked = false;
  portfolioClicked = false;
  contactClicked = false;
  language = 'en';
  currentImageHeader = '/assets/img/german.png';
  currentImageAtf = '/assets/img/atf-description.png';
  menuContents = [
    {
      linkComponent: '#aboutMe',
      title: 'ABOUT_ME',
    },
    {
      linkComponent: '#skills',
      title: 'SKILLS',
    },
    {
      linkComponent: '#portfolio',
      title: 'PORTFOLIO',
    },
    {
      linkComponent: '#contact',
      title: 'CONTACT',
    },
  ];

  skills = [
    {
      image: '/assets/img/angular-icon.png',
      description: 'Angular',
    },
    {
      image: '/assets/img/typescript-icon.png',
      description: 'TypeScript',
    },
    {
      image: '/assets/img/javascript-icon.png',
      description: 'JavaScript',
    },
    {
      image: '/assets/img/html-icon.png',
      description: 'HTML',
    },
    {
      image: '/assets/img/firebase-icon.png',
      description: 'Firebase',
    },
    {
      image: '/assets/img/github-icon.png',
      description: 'GIT',
    },
    {
      image: '/assets/img/css-icon.png',
      description: 'CSS',
    },
    {
      image: '/assets/img/rest-api-icon.png',
      description: 'Rest-Api',
    },
    {
      image: '/assets/img/scrum--icon.png',
      description: 'Scrum',
    },
    {
      image: '/assets/img/materialdesing-icon.png',
      description: 'Materialdesign',
    },
  ];

  portfolios = [
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      discription: 'JOIN',
      image: '/assets/img/join.png',
      linkGitHub: 'https://github.com/SilvanStuber/join',
      linkApp: 'https://silvanstuber.ch/join/loginpage.html',
    },
    {
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      discription: 'SHARKIE',
      image: '/assets/img/sharkie.png',
      linkGitHub: 'https://github.com/SilvanStuber/Sharkie',
      linkApp: 'https://silvanstuber.ch/sharkie',
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | Api',
      discription: 'POKEDEX',
      image: '/assets/img/pokedex.png',
      linkGitHub: 'https://github.com/SilvanStuber/pokedex',
      linkApp: 'https://silvanstuber.ch/pokedex/',
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
   * Navigates to the specified application path.
   *
   * @param {string} appPath - The path to navigate to within the application.
   */
  goToContent(appPath: string) {
    this.router.navigateByUrl(appPath);
  }

  /**
   * Smoothly scrolls the window to the top.
   * This function uses the `window.scrollTo` method with a smooth scrolling behavior
   * to scroll the window to the top (above the fold).
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Loads the above-the-fold content and scrolls to the top.
   */
  loadATF() {
    this.goToContent('');
    this.scrollToTop();
  }

  /**
   * Switches the language between English and German.
   * Updates the `language` property and the translation service.
   */
  switchLanguage() {
    if (this.language == 'en') {
      this.language = 'de';
      this.translate.use('de');
    } else {
      this.language = 'en';
      this.translate.use('en');
    }
  }

  /**
   * Switches the displayed images based on the current language.
   * Updates `currentImageHeader` and `currentImageAtf` properties.
   */
  switchImage() {
    if (this.language == 'en') {
      this.currentImageHeader = '/assets/img/german.png';
      this.currentImageAtf = '/assets/img/atf-description.png';
    } else {
      this.currentImageHeader = '/assets/img/english.png';
      this.currentImageAtf = '/assets/img/atf-description-german.png';
    }
  }
}
