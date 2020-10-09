import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      {
        id: 1,
        name: 'Dominik',
        age: 22,
      },
      {
        id: 2,
        name: 'Mateusz',
        age: 25,
      },
      {
        id: 3,
        name: 'Maciek',
        age: 23,
      },
    ];
  }
}
