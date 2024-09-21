import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div>
    <h1>Hi, and welcome to my site!</h1>
    <h2>My name is Nick Palmer, and I am a software engineer based in Chicago, IL.</h2>
    <h3>I am currently a Senior Software Engineer at Capital One.</h3>
    <h3>To contact me, please email me at <i>nickpalmer.dev</i>.</h3>
    <h3>My LinkedIn profile can be found <a href="https://www.linkedin.com/in/nickolas-palmer-b17a9212b/">here</a>.</h3>
    </div>
  `,
  styles: ['  div { border: 5px solid; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); padding: 10px; } h1, h2, h3 {padding-bottom: 15px;} ']
})
export class AppComponent {
  title = 'Nick Palmer';
}
