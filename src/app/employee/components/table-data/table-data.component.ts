import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ɵEmptyOutletComponent } from '@angular/router';
import { Employee } from '../../models/employee';



@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor(private changeDetectorRefs: ChangeDetectorRef, private employee: EmployeeService) { }

  displayedColumns: string[] = ['id', 'name', 'contractTypeName', 'roleName', 'roleDescription', 'hourlySalary', 'monthlySalary', 'annualSalary'];

  private _datasource: any;

  @Input()
  set datasource$(datasource: any) {
    if (datasource != null && datasource != undefined) {

      if (Array.isArray(datasource)) {
        this._datasource = datasource;
        this.changeDetectorRefs.detectChanges();
      } else {
        this._datasource = new Array<Employee[]>(datasource);
        this.changeDetectorRefs.detectChanges();
      }
    }
  }

  ngOnInit() {
  }

}
