import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ message | titlecase }}</h2>
    <h2>{{ message | slice: 1:5 }}</h2>
    <h2>{{ person | json }}</h2>
    <h2>{{ stairs | number: '1.2-3' }}</h2>
    <h2>{{ stairs | number: '3.4-5' }}</h2>
    <h2>{{ stairs | number: '3.1-2' }}</h2>
    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ stairs | currency: 'GBP':'code' }}</h2>
    <h2>{{ date | date: 'short' }}</h2>
    <h2>{{ date | date: 'mediumDate' }}</h2>
    <h2>{{ date | date: 'shortTime' }}</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public message = 'hello there';
  public person = {
    firstName: 'Dominik',
    lastName: 'Kozuch',
  };
  public stairs: number = 5.12345;
  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
