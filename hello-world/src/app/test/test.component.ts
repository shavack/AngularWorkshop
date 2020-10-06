import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: ` <!-- bind property -->
    <input [id]="myId" [disabled]="isDisabled" [value]="name" />
    <!-- bind property with hyphen -->
    <input bind-id="myId" bind-disabled="isDisabled" bind-value="name" />
    <!-- property binding -->
    <input id="{{ myId }}" value="{{ name }}" />

    <h2>{{ greetUser() }}</h2>`,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        color: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public isDisabled = true;
  public myId = 'testId';
  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }
  change(): void {
    this.isDisabled = !this.isDisabled;
  }
}
