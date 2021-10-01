import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubordinateCreateComponent } from './employee-subordinate-create.component';

describe('EmployeeSubordinateCreateComponent', () => {
  let component: EmployeeSubordinateCreateComponent;
  let fixture: ComponentFixture<EmployeeSubordinateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubordinateCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubordinateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
