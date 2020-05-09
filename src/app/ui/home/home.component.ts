import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutMe() {
    var aboutSection: HTMLElement = document.getElementsByClassName('about-me-container')[0] as HTMLElement;
    aboutSection.scrollIntoView({behavior: 'smooth'});
  }

  experience() {
    var aboutSection: HTMLElement = document.getElementsByClassName('experience-container')[0] as HTMLElement;
    aboutSection.scrollIntoView({behavior: 'smooth'});
  }

  projects() {
    var aboutSection: HTMLElement = document.getElementsByClassName('projects-container')[0] as HTMLElement;
    aboutSection.scrollIntoView({behavior: 'smooth'});
  }

  contact() {
    var aboutSection: HTMLElement = document.getElementsByClassName('contact-container')[0] as HTMLElement;
    aboutSection.scrollIntoView({behavior: 'smooth'});
  }

}
