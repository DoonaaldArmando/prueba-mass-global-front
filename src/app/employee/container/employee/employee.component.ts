import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employee$: Observable<Employee[]> | Observable<Employee>;
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
  }

  public getMessage(id: number): void {
    if (id == null || id == undefined) {
      this.employee$ = this.employee.getEmployees();
    } else {
      this.employee$ = this.employee.getEmployee(id);
    }

  }



}
