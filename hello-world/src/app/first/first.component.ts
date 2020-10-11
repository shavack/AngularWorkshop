import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
    <h3>First component</h3>
    <h2>{{ errorMsg }}</h2>
    <h3>List of employees</h3>
    <li (click)="onClick(emp)" *ngFor="let emp of employees">
      <button>{{ emp.id }}. {{ emp.name }}</button>
    </li>
  `,
  styles: [],
})
export class FirstComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }

  onClick(employee): void {
    this._router.navigate(['/first', employee.id]);
  }
}
