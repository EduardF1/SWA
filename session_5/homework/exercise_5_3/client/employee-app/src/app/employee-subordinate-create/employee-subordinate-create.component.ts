import {Component, Input, OnInit} from '@angular/core';
import {PersonsService} from "../shared/services/persons/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../shared/services/employee/employee.service";

@Component({
  selector: 'app-employee-subordinate-create',
  templateUrl: './employee-subordinate-create.component.html',
  styleUrls: ['./employee-subordinate-create.component.css']
})
export class EmployeeSubordinateCreateComponent implements OnInit {
  private id = this.actRoute.snapshot.params['id'];

  @Input() employeeDetails = { employeeId: '', salary: '', manager: false }

  constructor(private employeeService: EmployeeService,
              private actRoute: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {}

  addSubordinate(dataEmployee?:any) {
    this.employeeService.addSubordinate(this.employeeDetails, this.id).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }
}
