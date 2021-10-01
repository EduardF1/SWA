import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubordinatesComponent } from './employee-subordinates.component';

describe('EmployeeSubordinatesComponent', () => {
  let component: EmployeeSubordinatesComponent;
  let fixture: ComponentFixture<EmployeeSubordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubordinatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
