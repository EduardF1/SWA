import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from "../shared/services/employee/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails:any = { }

  constructor(
    public employeeService: EmployeeService,
    public router: Router
  ) { }

  ngOnInit() { }

  addEmployee(dataEmployee?:any) {

    this.employeeService.createEmployee(this.getPayload()).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }

  private getPayload() {
     let payload:any = {
       employeeId: parseInt(this.employeeDetails.employeeId),
       salary: parseInt(this.employeeDetails.salary),
       manager:this.employeeDetails.manager
     }
     return payload;
  }
}
