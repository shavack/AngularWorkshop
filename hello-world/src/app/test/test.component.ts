import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <button (click)="toggleGreeting()">Toggle greeting</button>
    <h2 *ngIf="displayName; else elseBlock">{{ greetUser() }}</h2>
    <ng-template #elseBlock>
      <h2>No greeting</h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock1; else elseBlock1"></div>
    <ng-template #thenBlock1>
      <h2>Thenblock1</h2>
    </ng-template>
    <ng-template #elseBlock1>
      <h2>Elseblock1</h2>
    </ng-template>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Dominik';
  public displayName = true;

  constructor() {}

  ngOnInit(): void {}

  greetUser(): string {
    return 'Hello ' + this.name;
  }

  toggleGreeting(): void {
    this.displayName = !this.displayName;
  }
}
