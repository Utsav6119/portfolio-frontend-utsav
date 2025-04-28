import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submittedContacts: any[] = [];

  onSubmit(): void {
    console.log('Form Submitted:', this.contact);

    // Save a copy
    this.submittedContacts.push({ ...this.contact });

    // Optional: Save to localStorage
    // localStorage.setItem('submittedContacts', JSON.stringify(this.submittedContacts));;;

    // Reset form
    this.contact = {
      name: '',
      email: '',
      message: ''
    };

    alert('Thank you for contacting us!');
  }
}
