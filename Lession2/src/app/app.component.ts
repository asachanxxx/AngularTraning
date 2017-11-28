import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>I am {{name}}</h1>
  <p>i am in {{age1}} now but doing like {{age2}} </p>
  <p>{{greetingText}}</p>
  `,
})
export class AppComponent {
  title = 'app';
  name1:string = "Asanga";
  age1:string = "30's";
  age2:string = "20's";
  greetingText:string = "hehehe just kidding";

  clickSomeButton(){console.log("Welcome to Lesson 2");}
}
