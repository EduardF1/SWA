import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../shared/services/employee/employee.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employees: any = [];
  public id: string = '';

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.employeeService.getEmployees().subscribe((data: any) => {
      console.log(data)
      this.employees = data;
    });
  };
}
