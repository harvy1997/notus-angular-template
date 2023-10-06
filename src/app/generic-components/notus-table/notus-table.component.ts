import { Component, OnInit, Input } from "@angular/core";
import { ConfigTable } from "./config/config-table";
import { ConfigDropdown } from "../notus-dropdown/config/config-dropdowm";

@Component({
  selector: "app-notus-table",
  templateUrl: "./notus-table.component.html",
})
export class NotusTableComponent implements OnInit {
  
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
  validateRender(idx:number){
    if (this.configTable?.config && this.configTable?.config.headers) {
      return this.configTable?.config.properties[idx].render;
    }
    return false;
  }

}
