import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }

  logMessage(value): void {
    console.log(value);
  }
}
