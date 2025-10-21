import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppdataService } from '../../appdata.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  appdata = inject(AppdataService);
  http = inject(HttpClient);
  placeholders: { [key: string]: string } = {};
  constructor(private translate: TranslateService) { }
  contactData = {
    name: '',
    email: '',
    message: '',
    website: '' as string,
    checkbox: false,
  };
  privacyPolicyChecked = false;
  messageWasSent = false;

  post = {
    endPoint: 'https://dev.stuberforms.ch/backend/contact.php'
  };


  placeholdersName: '' | undefined;
  placeholdersEmail: '' | undefined;
  placeholdersMessage: '' | undefined;
  sendeMessageButtonContent: '' | undefined;

  /**
   * Initializes component and sets placeholders for name, email, and message fields.
   */
  ngDoCheck() {
    this.translate
      .get([
        'CONTACT.INPUT-NAME',
        'CONTACT.INPUT-EMAIL',
        'CONTACT.INPUT-MESSAGE',
        'CONTACT.PRIVACY-POLICY-BUTTON',
      ])
      .subscribe((translations) => {
        this.placeholdersName = translations['CONTACT.INPUT-NAME'];
        this.placeholdersEmail = translations['CONTACT.INPUT-EMAIL'];
        this.placeholdersMessage = translations['CONTACT.INPUT-MESSAGE'];
        this.sendeMessageButtonContent =
          translations['CONTACT.PRIVACY-POLICY-BUTTON'];
      });
  }

  /**
   * Handles form submission.
   *
   * @param {NgForm} ngForm - The form to be submitted.
   * @returns {void}
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post<{ ok: boolean; error?: string }>(
        this.post.endPoint,
        {
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
          website: this.contactData.website || '', // falls dein PHP Honeypot erwartet
        },
        {
          headers: { 'Content-Type': 'application/json' }, // HttpClient setzt das i.d.R. auch automatisch
          responseType: 'json',
        } as const
      )
        .subscribe({
          next: (res) => {
            if (res?.ok) {
              ngForm.resetForm();
              this.visibleMessageConfirmation();
            } else {
              console.error('Server meldet Fehler:', res?.error ?? 'Unbekannt');
            }
          },
          error: (err) => {
            console.error('Netzwerk/Server-Fehler:', err);
          }
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
