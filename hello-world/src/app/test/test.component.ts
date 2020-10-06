import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div
      *ngFor="let color of colors; index as i; last as l; odd as o; even as e"
    >
      <h2 [style.color]="color">
        {{ i }}. {{ color }} last: {{ l }} odd: {{ o }} even: {{ e }}
      </h2>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public color = 'red';
  public colors = ['red', 'green', 'blue'];
  public name = 'Dominik';

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }
  changeColor(value): void {
    this.color = value;
  }
}
