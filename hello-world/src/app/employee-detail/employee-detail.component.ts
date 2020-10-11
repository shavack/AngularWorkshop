import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-third',
  template: `
    <p>You selected employee {{ employeeId }}</p>
    <button (click)="goBack()">Back</button>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  `,
  styles: [],
})
export class EmployeeDetailComponent implements OnInit {
  public employeeId;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    //this.employeeId = parseInt(this._route.snapshot.paramMap.get('id'));
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.employeeId = parseInt(params.get('id'));
    });
  }

  goBack(): void {
    let selectedId = this.employeeId ? this.employeeId : null;
    //this._router.navigate(['/first', { id: selectedId }]);
    this._router.navigate(['../', { id: selectedId }], {
      relativeTo: this._route,
    });
  }

  goPrevious(): void {
    //this._router.navigate(['/first', this.employeeId - 1]);
    this._router.navigate(['../', this.employeeId - 1], {
      relativeTo: this._route,
    });
  }

  goNext(): void {
    //this._router.navigate(['/first', this.employeeId + 1]);
    this._router.navigate(['../', this.employeeId + 1], {
      relativeTo: this._route,
    });
  }
}
