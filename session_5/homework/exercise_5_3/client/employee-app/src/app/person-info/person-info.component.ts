import {Component, OnInit} from '@angular/core';
import {PersonsService} from "../shared/services/persons/persons.service";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../shared/models/person";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  public person: Person = {id: 0, name: ""};

  constructor(private personsService: PersonsService,
              private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findPersonById(this.id);
  }

  private findPersonById(id: any) {
    this.personsService.getPerson(id).subscribe((data:any) => {
      this.person = data;
    });
  }
}
