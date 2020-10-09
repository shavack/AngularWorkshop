import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second',
  template: `
    <h2>{{ errorMsg }}</h2>
    <ul *ngFor="let emp of employees">
      <li>{{ emp.id }} - {{ emp.name }} - {{ emp.age }}</li>
    </ul>
  `,
  styles: [``],
})
export class SecondComponent implements OnInit {
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
