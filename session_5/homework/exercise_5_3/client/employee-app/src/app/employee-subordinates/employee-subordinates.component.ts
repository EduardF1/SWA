import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../shared/services/persons/persons.service";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../shared/services/employee/employee.service";
import {Employee} from "../shared/models/employee";


@Component({
  selector: 'app-employee-subordinates',
  templateUrl: './employee-subordinates.component.html',
  styleUrls: ['./employee-subordinates.component.css']
})
export class EmployeeSubordinatesComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  public subordinates: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubordinates(this.id);
  }

  private getSubordinates(id:any) {
    this.employeeService.getEmployeeSubordinates(id).subscribe((data:any) => {
      this.subordinates = data;
    });
  }

}
