import { Component, OnInit, Input } from "@angular/core";
import { ConfigTable } from "./config/config-table";

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
