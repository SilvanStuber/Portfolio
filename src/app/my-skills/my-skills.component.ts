import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
      {
        "image": "/assets/img/angular-icon.png",
        "description": "Angular"
      },
      {
        "image": "/assets/img/typescript-icon.png",
        "description": "TypeScript"
      },
      {
        "image": "/assets/img/javascript-icon.png",
        "description": "JavaScript"
      },
      {
        "image": "/assets/img/html-icon.png",
        "description": "HTML"
      },
      {
        "image": "/assets/img/firebase-icon.png",
        "description": "Firebase"
      },
      {
        "image": "/assets/img/github-icon.png",
        "description": "GIT"
      },
      {
        "image": "/assets/img/css-icon.png",
        "description": "CSS"
      },
      {
        "image": "/assets/img/rest-api-icon.png",
        "description": "Rest-Api"
      },
      {
        "image": "/assets/img/scrum--icon.png",
        "description": "Scrum"
      },
      {
        "image": "/assets/img/materialdesing-icon.png",
        "description": "Materialdesign"
      }
    ]
  }
  

