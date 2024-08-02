import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  formData = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    country: '',
    message: '',
  };

  onSubmit() {
    localStorage.setItem('contactFormData', JSON.stringify(this.formData));
    alert('Data saved successfully');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      country: '',
      message: '',
    };
  }
}
