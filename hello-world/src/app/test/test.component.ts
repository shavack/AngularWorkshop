import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
    test component
    <h2>{{ errorMsg }}</h2>
    <ul *ngFor="let emp of employees">
      <li>{{ emp.name }}</li>
    </ul>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
