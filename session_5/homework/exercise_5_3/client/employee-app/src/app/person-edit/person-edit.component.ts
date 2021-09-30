import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../shared/services/persons/persons.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  person: any = {};

  constructor(
    private personsService: PersonsService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.personsService.getPerson(this.id).subscribe((data: {}) => {
      this.person = data;
    })
  }

  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.personsService.updatePerson(this.id, this.person).subscribe((data:any) => {
        this.router.navigate(['/persons-list'])
      })
    }
  }
}
