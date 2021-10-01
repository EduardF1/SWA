import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../models/employee';
import {Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {ErrorHandlingService} from "../shared/error-handling.service";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  // Define API
  apiURL = 'http://localhost:9090';

  constructor(private http: HttpClient,  private error: ErrorHandlingService) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employees')
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: Employee): Observable<Employee> {
    console.log(employee)
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  // HttpClient API get() method => Fetch employee by id
  getEmployee(id:number): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  getEmployeeSubordinates(id:number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employees/' + id + '/subordinates')
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }

  // HttpClient API post() method => Create employee
  addSubordinate(employee: Employee, employeeId:string): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + `/employees/${employeeId}/subordinates`, JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.error.handleError)
      )
  }
}
