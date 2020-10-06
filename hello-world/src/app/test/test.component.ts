import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style Binding</h2>
    <h2 [ngStyle]="titleStyles">Style Binding</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public myId = 'testId';
  public successClass = 'text-success';
  public hasError = false;
  public highlightColor = 'orange';

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }
}
