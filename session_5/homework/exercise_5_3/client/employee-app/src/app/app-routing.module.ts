import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {PersonsListComponent} from "./persons-list/persons-list.component";
import {PersonEditComponent} from "./person-edit/person-edit.component";
import {PersonInfoComponent} from "./person-info/person-info.component";
import {EmployeeInfoComponent} from "./employee-info/employee-info.component";
import {EmployeeSubordinatesComponent} from "./employee-subordinates/employee-subordinates.component";
import {EmployeeSubordinateCreateComponent} from "./employee-subordinate-create/employee-subordinate-create.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'persons-list', component: PersonsListComponent },
  { path: 'person-edit/:id', component: PersonEditComponent },
  { path: 'person-info/:id', component: PersonInfoComponent },
  { path: 'employee-info/:id', component: EmployeeInfoComponent },
  { path: 'employee-subordinates/:id', component: EmployeeSubordinatesComponent },
  { path: 'employee-subordinate-create/:id', component: EmployeeSubordinateCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
