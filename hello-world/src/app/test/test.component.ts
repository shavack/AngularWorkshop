import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <button (click)="onClick()">{{ greetUser() }}</button>
    <button (click)="onClick1($event)">Click me</button>
    {{ event }}
    <button (click)="name = 'new name'">Click me</button>
    <input [disabled]="hasError" />
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public hasError = true;
  public highlightColor = 'orange';
  public event = 'event';

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }
  onClick(): void {
    this.hasError = !this.hasError;
  }

  onClick1(event): void {
    this.event = event;
  }
}
