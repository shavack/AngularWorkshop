import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SecondComponent } from './second/second.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'second', component: SecondComponent },
  {
    path: 'employee-list/:id',
    component: EmployeeDetailComponent,
    children: [
      { path: 'overview', component: EmployeeOverviewComponent },
      { path: 'contact', component: EmployeeContactComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  EmployeeListComponent,
  SecondComponent,
  EmployeeDetailComponent,
  EmployeeOverviewComponent,
  EmployeeContactComponent,
  PageNotFoundComponent,
];
