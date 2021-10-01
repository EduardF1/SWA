import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { PersonInfoComponent } from './person-info/person-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeSubordinatesComponent } from './employee-subordinates/employee-subordinates.component';
import { EmployeeSubordinateCreateComponent } from './employee-subordinate-create/employee-subordinate-create.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeesListComponent,
    PersonsListComponent,
    PersonEditComponent,
    PersonInfoComponent,
    EmployeeInfoComponent,
    EmployeeSubordinatesComponent,
    EmployeeSubordinateCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
