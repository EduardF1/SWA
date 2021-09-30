import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../shared/services/employee/employee.service";
import {Employee} from "../shared/models/employee";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.employeeService.getEmployees().subscribe((data: any) => {
      this.Employee = data;
    })
  }

}
