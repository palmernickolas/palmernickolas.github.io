import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private name: string;
  private email: string;
  private user_message: string;
  
  constructor() { }

  ngOnInit() {
  }

  submitForm(name, email, message) {
    if (name.valid && email.valid && message.valid) {
      alert('Good');
    } else {
      alert('Bad');
    }
  }
}
