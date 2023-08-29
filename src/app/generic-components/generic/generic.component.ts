import { Component } from '@angular/core';
import { ConfigTable, propertieImageGroup, propertieProgress, propertieState, propertieText, propertieTextAndImage } from '../notus-table/config/config-table';
import { ConfigDropdown, typeTitle, typeMetod, typeUrl } from '../notus-dropdown/config/config-dropdowm';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent {
  protected tableConfig={
    title:"Prueba de tablas simple",
    config:{header:["holita","como","está la","tabla"],properties:["a","b","c","d"]},
    data:[
      {a:"porque será",b:" que esta vaina",c:" esta cosa tan",d:"rarisimoo"},
      {a:"aaaaa",b:"porque será",c:" que esta vaina",d:"rarisimoo"},
      {a:"aaaaa",b:"vvvv",c:"porque será",d:" que esta vaina"},
      {a:" que esta vaina",b:"cccc",c:" esta cosa tan",d:"porque será"},
      {a:"porque será",b:" que esta vaina",c:" esta cosa tan",d:"rarisimoo"}
    ]    
  }

  
  // creacion de headers
  config={headers:["Project","Budget","Status","Users","Completion"],
          properties:[propertieTextAndImage("Project","ProjectImg",true),
                      propertieText("Budget",false),
                      propertieState("Status","point",false),
                      propertieImageGroup("Users"),
                      propertieProgress("Completion",false)
                    ]
          };
  data=[
    {ProjectImg:"assets/img/bootstrap.jpg",Project:"Argon Design System",Budget:"2000 $",Status:"pending",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"60%", 
    },
    {ProjectImg:"assets/img/angular.jpg",Project:"Angular Now UI Kit PRO",Budget:"2000 $",Status:"completed",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"100%"},
    {ProjectImg:"assets/img/sketch.jpg",Project:"Black Dashboard Sketch",Budget:"2000 $",Status:"delayed",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"33%"
    },
  ]   
  configTable=new ConfigTable("Card Tables",
                              "light",
                              "10",
                              this.config,
                              this.data,
                            )


  pru=()=>{
    console.log("prueba");
  }
  configDropdown=new ConfigDropdown(null,[
                                    typeTitle("typeTitle"),
                                    typeMetod("typeMetod",this.pru),
                                    typeUrl("typeUrl",String.raw`/admin/tables`)
  ])


}
