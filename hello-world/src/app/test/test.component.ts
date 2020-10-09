import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
    <ul *ngFor="let emp of employees">
      <li>{{ emp.name }}</li>
    </ul>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }
}
