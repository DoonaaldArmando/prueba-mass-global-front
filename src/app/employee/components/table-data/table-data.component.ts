import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'contractTypeName', 'roleName', 'roleDescription', 'hourlySalary', 'monthlySalary', 'annualSalary'];
  _datasource: Employee[];
  @Input()
  set datasource$(datasource: any) {
    if (datasource != null && datasource != undefined) {
      this._datasource = datasource;
      console.log(datasource, this._datasource)
    }
  }



  constructor() { }

  ngOnInit() {

  }

}
