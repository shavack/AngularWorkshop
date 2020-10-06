import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ name1 }}</h2>

    <button (click)="fireEvent('heloooooo from child')">Fire!</button>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public color = 'red';
  public name = 'Dominik';
  //@Input() public parentData;
  @Input('parentData') name1;

  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }

  changeColor(value: string): void {
    this.color = value;
  }

  fireEvent(message): void {
    this.childEvent.emit(message);
  }
}
