import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private url: string = 'https://formspree.io/xvowggjl';
  private formGroup: FormGroup;
  messageSent: boolean = false;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      user_message: ''
    });
  }

  onNameChange(event) {
    this.messageSent = false;
    if (event.target.value) {
      const value = event.target.value;
      this.formGroup.get('name').setValue(value);
    }
  }

  onEmailChange(event) {
    this.messageSent = false;
    if (event.target.value) {
      const value = event.target.value;
      this.formGroup.get('email').setValue(value);
    }
  }

  onMessageChange(event) {
    this.messageSent = false;
    if (event.target.value) {
      const value = event.target.value;
      this.formGroup.get('user_message').setValue(value);
    }
  }

  submitForm(name, email, message) {
    if (!(name.valid && email.valid && message.valid)) {
      return;
    }
    const formData = new FormData();
    formData.append('Name', this.formGroup.get('name').value);
    formData.append('Email', this.formGroup.get('email').value);
    formData.append('Message', this.formGroup.get('user_message').value);

    this.httpClient.post<any>(this.url, formData).subscribe(
      (res) => {
        this.handleSubmission();
      },
      (err) => console.log(err)
    );
  }

  handleSubmission() {
    let nameInput = (<HTMLInputElement>document.getElementById('name'));
    nameInput.value = '';
    let emailInput = (<HTMLInputElement>document.getElementById('email'));
    emailInput.value = '';
    let messageInput = (<HTMLInputElement>document.getElementById('message'));
    messageInput.value = '';
    this.messageSent = true;
  }
}
