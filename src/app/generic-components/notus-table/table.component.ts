import { Component, OnInit, Input } from "@angular/core";
import { ConfigTable } from "./config/config-table";
import { ConfigDropdown } from "../notus-dropdown/config/config-dropdowm";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent implements OnInit {
  
  @Input()
  configTable:ConfigTable|null= null;
  @Input()
  configDropdowm:ConfigDropdown|null= null;

  constructor() {}

  ngOnInit(): void {}
  
  convertStringToNumber(value:string){
    const num = parseInt(value);
    return !isNaN(num)?num:0;
  }

}
