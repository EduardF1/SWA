import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../shared/models/employee";
import {EmployeeService} from "../shared/services/employee/employee.service";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  public employee: Employee = {employeeId: '', manager: false, salary: ''};

  constructor(private employeeService: EmployeeService,
              private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findEmployeeById(this.id);
  }

  private findEmployeeById(id: any) {
    this.employeeService.getEmployee(id).subscribe((data:any) => {
      this.employee = data;
    });
  }
}
