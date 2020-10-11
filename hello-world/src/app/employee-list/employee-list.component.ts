import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
    <h3>First component</h3>
    <h2>{{ errorMsg }}</h2>
    <h3>List of employees</h3>
    <ul class="items">
      <li
        (click)="onClick(emp)"
        [class.selected]="isSelected(emp)"
        *ngFor="let emp of employees"
      >
        <span class="badge">{{ emp.id }}</span> {{ emp.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public selectedId;
  public errorMsg;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });

    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }

  onClick(employee): void {
    //this._router.navigate(['/first', employee.id]);
    this._router.navigate([employee.id], { relativeTo: this._route });
  }

  isSelected(employee): boolean {
    return employee.id === this.selectedId;
  }
}
