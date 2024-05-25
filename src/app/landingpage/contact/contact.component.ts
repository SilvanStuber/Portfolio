import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppdataService } from '../../appdata.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  appdata = inject(AppdataService);
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };
  privacyPolicyChecked = false;
  messageWasSent = false;

  post = {
    endPoint: 'https://silvanstuber.ch/sendMail.php',
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
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.visibleMessageConfirmation();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  /**
   * Displays a confirmation message indicating that a message was sent.
   *
   * This function sets the `messageWasSent` property to `true`, indicating that a message was sent.
   * After 4 seconds (4000 milliseconds), it resets the `messageWasSent` property to `false`.
   */
  visibleMessageConfirmation() {
    this.messageWasSent = true;
    setTimeout(() => {
      this.messageWasSent = false;
    }, 4000);
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
   * Navigates to the privacy policy page and scrolls to the top.
   */
  loadPrivacyPolicy() {
    this.appdata.goToContent('/privacypolicy');
    this.appdata.scrollToTop();
  }
}
