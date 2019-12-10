import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';



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
      this._datasource = datasource;
      console.log(datasource, this._datasource);
      this.changeDetectorRefs.detectChanges();
    }
  }

  ngOnInit() {
  }

}
