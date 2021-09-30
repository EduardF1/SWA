import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../../models/person';
import {Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Employee} from "../../models/employee";
import {ErrorHandlingService} from "../shared/error-handling.service";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  // Define API
  apiURL = 'http://localhost:9090';

  constructor(private http: HttpClient, private error: ErrorHandlingService) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch persons
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiURL + '/persons')
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  // HttpClient API get() method => Fetch person by id
  getPerson(id:number): Observable<Person> {
    return this.http.get<Person>(this.apiURL + '/persons/' + id)
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  // HttpClient API patch() method => Patch person by id
  updatePerson(id:string, person:Person): Observable<Employee> {
    return this.http.patch<Employee>(this.apiURL + '/persons/' + id, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }
}
