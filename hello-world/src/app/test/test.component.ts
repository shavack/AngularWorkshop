import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <button (click)="changeColor('red')">red</button>
    <button (click)="changeColor('green')">green</button>
    <button (click)="changeColor('blue')">blue</button>
    <button (click)="changeColor('none')">none</button>

    <div [ngSwitch]="color">
      <div [style.color]="color" *ngSwitchCase="'red'">You picked red</div>
      <div [style.color]="color" *ngSwitchCase="'blue'">You picked blue</div>
      <div [style.color]="color" *ngSwitchCase="'green'">You picked green</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public color = 'red';
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
