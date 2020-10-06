import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2 class="text-success">{{ greetUser() }}</h2>
    <h2 [class]="successClass">{{ greetUser() }}</h2>
    <h2 class="text-special" [class]="successClass">{{ greetUser() }}</h2>
    <h2 [class.text-danger]="hasError">{{ greetUser() }}</h2>
    <h2 [ngClass]="messageClasses">{{ greetUser() }}</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public myId = 'testId';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'this-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }
}
