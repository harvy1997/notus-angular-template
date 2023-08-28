import { Component } from '@angular/core';
import { ColorsRowStateOption, ConfigColumnTable, ConfigTable, typeImageGroup, typeProgress, typeState, typeText, typeTextAndImage } from '../notus-table/config/config-table';

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
  config={headers:["Project","Budget","Status","Users","Completion"],properties:["Project","Budget","Status","Users","Completion"]};
  data=[
    {Project:"Argon Design System",Budget:"2000 $",Status:"pending",Users:null,Completion:"60%", 
    config: [ typeTextAndImage(true,"assets/img/bootstrap.jpg"),
              typeText(false),
              typeState(false,"point",ColorsRowStateOption.pending),
              typeImageGroup([ "assets/img/team-1-800x800.jpg",
                              "assets/img/team-2-800x800.jpg",
                              "assets/img/team-3-800x800.jpg",
                              "assets/img/team-4-470x470.png"]),
              typeProgress(false,ColorsRowStateOption.delayed,60)
            ]},
    {Project:"Angular Now UI Kit PRO",Budget:"2000 $",Status:"completed",Users:null,Completion:"100%", 
    config: [ typeTextAndImage(true,"assets/img/angular.jpg"),
              typeText(false),
              typeState(false,"point",ColorsRowStateOption.complete),
              typeImageGroup([ "assets/img/team-1-800x800.jpg",
                              "assets/img/team-2-800x800.jpg",
                              "assets/img/team-3-800x800.jpg",
                              "assets/img/team-4-470x470.png"]),
              typeProgress(false,ColorsRowStateOption.complete,100)
            ]},
    {Project:"Black Dashboard Sketch",Budget:"2000 $",Status:"delayed",Users:null,Completion:"73%", 
    config: [typeTextAndImage(true,"assets/img/sketch.jpg"),
             typeText(false),
             typeState(false,"point",ColorsRowStateOption.delayed),
             typeImageGroup([ "assets/img/team-1-800x800.jpg",
                              "assets/img/team-2-800x800.jpg",
                              "assets/img/team-3-800x800.jpg",
                              "assets/img/team-4-470x470.png"]),
              typeProgress(false,ColorsRowStateOption.delayed,73)
            ]},
  ]   
  configTable=new ConfigTable("Card Tables",
                              "light",
                              "10",
                              this.config,
                              this.data,
                            )
}
