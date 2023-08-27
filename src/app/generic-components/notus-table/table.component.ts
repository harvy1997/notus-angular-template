import { Component, OnInit, Input } from "@angular/core";
import { ColorsRowStateOption, ColumnTable, ConfigTable, RowStateTable, RowTable } from "./config/config-table";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent implements OnInit {
  
  @Input()
  configTable:ConfigTable|null= null;

  

  constructor() {}

  ngOnInit(): void {}
}
