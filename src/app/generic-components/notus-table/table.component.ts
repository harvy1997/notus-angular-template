import { Component, OnInit, Input } from "@angular/core";
import { ColorsRowStateOption, ColumnTable, ConfigTable, RowStateTable, RowTable } from "./entitie/config-table";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent implements OnInit {
  
  // creacion de headers
  headers=["Project JUAN","Budget","Status","Users","Completion"];
  
  // creacion de row1
  row1column1=new ColumnTable("Argon Design System",true,"assets/img/bootstrap.jpg",null,null);
  row1column2=new ColumnTable("$2,500 USD",undefined,null,null,null);
  row1rowState=new RowStateTable("point",ColorsRowStateOption.pending,null);
  row1column3=new ColumnTable("pending",undefined,null,this.row1rowState,null);
  
  row1column4=new ColumnTable(null,undefined,null,null,["assets/img/team-1-800x800.jpg",
                                        "assets/img/team-2-800x800.jpg",
                                        "assets/img/team-3-800x800.jpg",
                                        "assets/img/team-4-470x470.png"]);
  row1rowStateBar=new RowStateTable("bar",ColorsRowStateOption.delayed,60);
  row1column5=new ColumnTable("60%",undefined,null,this.row1rowStateBar,null);
  row1=new RowTable([this.row1column1,this.row1column2,this.row1column3,this.row1column4,this.row1column5]);
  // creacion de row2
  row2column1=new ColumnTable("Angular Now UI Kit PRO",true,"assets/img/angular.jpg",null,null);
  row2column2=new ColumnTable("$1,800 USD",undefined,null,null,null);
  row2rowState=new RowStateTable("point",ColorsRowStateOption.complete,null);
  row2column3=new ColumnTable("completed",undefined,null,this.row2rowState,null);
  row2column4=new ColumnTable(null,undefined,null,null,["assets/img/team-1-800x800.jpg",
                                        "assets/img/team-2-800x800.jpg",
                                        "assets/img/team-3-800x800.jpg",
                                        "assets/img/team-4-470x470.png"]);
  row2rowStateBar=new RowStateTable("bar",ColorsRowStateOption.complete,100);
  row2column5=new ColumnTable("100%",undefined,null,this.row2rowStateBar,null);
  row2=new RowTable([this.row2column1,this.row2column2,this.row2column3,this.row2column4,this.row2column5]);
  // creacion de row3
  row3column1=new ColumnTable("Black Dashboard Sketch",true,"assets/img/sketch.jpg",null,null);
  row3column2=new ColumnTable("$3,150 USD",undefined,null,null,null);
  row3rowState=new RowStateTable("point",ColorsRowStateOption.delayed,null);
  row3column3=new ColumnTable("delayed",undefined,null,this.row3rowState,null);
  row3column4=new ColumnTable(null,undefined,null,null,["assets/img/team-1-800x800.jpg",
                                        "assets/img/team-2-800x800.jpg",
                                        "assets/img/team-3-800x800.jpg",
                                        "assets/img/team-4-470x470.png"]);
  row3rowStateBar=new RowStateTable("bar",ColorsRowStateOption.delayed,73);
  row3column5=new ColumnTable("73%",undefined,null,this.row3rowStateBar,null);
  row3=new RowTable([this.row3column1,this.row3column2,this.row3column3,this.row3column4,this.row3column5]);


  @Input()
  configTable=ConfigTable(  "Card Tables",
                            "light",
                            this.headers,
                            [this.row1,
                              this.row2,
                              this.row3])

  

  constructor() {}

  ngOnInit(): void {}
}
