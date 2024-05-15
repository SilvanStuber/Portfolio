import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /**
   * Smoothly scrolls the window to the top.
   * This function uses the `window.scrollTo` method with a smooth scrolling behavior
   * to scroll the window to the top (above the fold).
   */
  scrollToAtf() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
