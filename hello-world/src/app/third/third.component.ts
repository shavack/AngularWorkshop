import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-third',
  template: `
    <p>You selected employee {{ employeeId }}</p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  `,
  styles: [],
})
export class ThirdComponent implements OnInit {
  public employeeId;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    //this.employeeId = parseInt(this._route.snapshot.paramMap.get('id'));
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.employeeId = parseInt(params.get('id'));
    });
  }

  goPrevious(): void {
    this._router.navigate(['/first', this.employeeId - 1]);
  }

  goNext(): void {
    this._router.navigate(['/first', this.employeeId + 1]);
  }
}
