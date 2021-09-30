import { Component, OnInit } from '@angular/core';
import { PersonsService } from "../shared/services/persons/persons.service";


@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  public persons: any = [];
  public id: string = '';

  constructor(
    private personsService: PersonsService
  ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  // Get persons list
  loadPersons(){
    return this.personsService.getPersons().subscribe((data: any) => {
      this.persons = data;
    });
  };
}
