import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  privacyPolicyChecked = false;
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission.
   *
   * @param {NgForm} ngForm - The form to be submitted.
   * @returns {void}
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.privacyPolicyChecked = false;
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  /**
   * Toggles the privacy policy checked state.
   * If the privacy policy is not checked, it sets the state to checked.
   * If the privacy policy is already checked, it sets the state to unchecked.
   */
  privacyPolicyValidation() {
    if (!this.privacyPolicyChecked) {
      this.privacyPolicyChecked = true;
    } else {
      this.privacyPolicyChecked = false;
    }
  }

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
