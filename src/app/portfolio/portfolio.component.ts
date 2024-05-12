import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  portfolios = [
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      discription:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      image: '/assets/img/join.png',
      linkGitHub: 'https://github.com/SilvanStuber/join',
      linkApp: '',
    },
    {
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      discription:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      image: '/assets/img/sharkie.png',
      linkGitHub: 'https://github.com/SilvanStuber/Sharkie',
      linkApp: '',
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | Api',
      discription:
        'Based on the PokéAPI, a simple library that includes details on Pokémon species, their evolutions, abilities, types, and game stats.',
      image: '/assets/img/pokedex.png',
      linkGitHub: 'https://github.com/SilvanStuber/pokedex',
      linkApp: '',
    },
  ];
}
