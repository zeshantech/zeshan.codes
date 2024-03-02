import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      phoneNumber: [''],
    });
  }

  async submitContactForm(event: Event): Promise<void> {
    event.preventDefault();

    const formData = this.contactFormGroup.value;
    await this.contactService.sendEmail(formData);
    this.contactFormGroup.reset();
  }
}
