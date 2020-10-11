import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  template: ` <p>You selected employee {{ employeeId }}</p> `,
  styles: [],
})
export class ThirdComponent implements OnInit {
  public employeeId;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.employeeId = parseInt(this._route.snapshot.paramMap.get('id'));
  }
}
