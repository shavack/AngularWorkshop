import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second',
  template: `
    <ul *ngFor="let emp of employees">
      <li>{{ emp.id }} - {{ emp.name }} - {{ emp.age }}</li>
    </ul>
  `,
  styles: [``],
})
export class SecondComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }
}
