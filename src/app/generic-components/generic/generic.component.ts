import { Component } from '@angular/core';
import {  ConfigTable, propertieImageGroup, propertieProgress, propertieState, propertieText, propertieTextAndImage } from '../notus-table/config/config-table';
import { ConfigDropdown, typeTitle, typeMetod, typeUrl } from '../notus-dropdown/config/config-dropdowm';
import { ConfigNavbar } from '../notus-navbar/config/config-notus-navbar';
import { ConfigProfile, profileTypeBasic } from '../notus-profile/config/config-profile';

import { MenuModel } from '../slide-navbar/models';
import { ConfigForm } from '../simple-input-form/config/configForm.type';
import { InputField } from '../simple-input-form/config/inputField.type';

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

  headersTable=["Project of god","Budget","Status","Users","Completion"]
  // creacion de headers
  config={headers:this.headersTable,
          properties:[propertieTextAndImage("Project","ProjectImg",true),
                      propertieText("Budget",false),
                      propertieState("Status","point",false),
                      propertieImageGroup("Users"),
                      propertieProgress("Completion",false)
                    ]
          };
  data=[
    {ProjectImg:"assets/img/bootstrap.jpg",Project:"Argon Design System",Budget:"2000 $",Status:"Pendiente",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"60%", 
    },
    {ProjectImg:"assets/img/angular.jpg",Project:"Angular Now UI Kit PRO",Budget:"2000 $",Status:"Completado",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"100%"},
    {ProjectImg:"assets/img/sketch.jpg",Project:"Black Dashboard Sketch",Budget:"2000 $",Status:"inactivo",
      Users:[ "assets/img/team-1-800x800.jpg",
              "assets/img/team-2-800x800.jpg",
              "assets/img/team-3-800x800.jpg",
              "assets/img/team-4-470x470.png"],
      Completion:"33%"
    },
  ]   

  pru=()=>{
    console.log("prueba");
  }
  configDropdown=new ConfigDropdown(null,"text-slate-700",[
                                    typeTitle("typeTitle"),
                                    typeMetod("typeMetod",this.pru,null),
                                    typeUrl("typeUrl",String.raw`/admin/tables`,null)
  ])

  configTable=new ConfigTable("prueba","light","20",this.config,this.data);

  configDropdownNavbar=new ConfigDropdown("Navegacion","text-slate-700",[
    typeTitle("Menu"),
    typeMetod("Facebook",this.pru,'fab fa-facebook'),
    typeMetod("Tweet",this.pru,'fab fa-twitter'),
    typeMetod("Star",this.pru,'fab fa-github')
])

  configNavbar=new ConfigNavbar( {text:"",image:"assets/img/bootstrap.jpg"},null,
   [{text:"Login",metod:this.pru,icon:"fas fa-arrow-alt-circle-down"}],
   [{text:"Share",icon:"fab fa-facebook" ,rute:String.raw`/pru`},
   {text:"Star",icon:"fab fa-github" ,rute:String.raw`/pru`},
   {text:"Tweet",icon:"fab fa-twitter" ,rute:String.raw`/pru`}],
   [this.configDropdownNavbar,this.configDropdown]);

   dataProfile={
      imagen:"assets/img/team-2-800x800.jpg",
     correo:"JennaStones@correo.com",
     tipoDocumento:"CC",
     documento:"1104563333",
     nombre:"Jenna Stones",
     fechaCreacion:new Date(),
     telefono:"3333333333",
     sede:"Los Angeles, California",
     rol:"Solution Manager - Creative Tim Officer",
     empresa:"University of Computer Science",
     sobreMi:"An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.",
   }
  propertiesProfile=[
    {title:"Correo",column:"correo"},
    {title:"Tipo de documento",column:"tipoDocumento"},
    {title:"Documento",column:"documento"},
    {title:"Sede",column:"sede"},
  ];
   configProfile=profileTypeBasic(
    this.dataProfile.imagen,
    this.dataProfile.nombre,
    this.propertiesProfile,
    this.dataProfile,
    this.dataProfile.sede,
    this.dataProfile.empresa,
    this.dataProfile.rol,
    this.dataProfile.sobreMi,
    this.dataProfile.fechaCreacion
   )


  protected menuConfig:MenuModel[]=[
    {imagen:"fa-solid fa-arrow-right",descripcion:"Admin cosito 1",hijos:[]},
    {imagen:"fa-solid fa-arrow-left",descripcion:"Admin cosito 1",hijos:[]},
    {imagen:"fa-solid fa-arrow-up",descripcion:"Admin cosito 1",hijos:[]},
    {imagen:"fa-solid fa-arrow-down",descripcion:"Admin cosito 1",hijos:[]}
   
  ]
  private createMenuConfig(){
      this.menuConfig.forEach((menu,idx)=>{
        for (let index = 0; index < 5; index++) {
          this.menuConfig[idx].hijos.push({url:"/chucha/generic/"+idx,descripcion:`Cosito ${idx}_${index}`},)          
          
        }
      })
  }
  protected inputConfig:InputField[]=[
    {key:"a",name:"holi",initialValue:"pp",validators:[]},
    {key:"a",name:"holi",initialValue:"pp",validators:[]},
    {key:"a",name:"holi",initialValue:"pp",validators:[]},
    {key:"a",name:"holi",initialValue:"pp",validators:[]},
    {key:"a",name:"holi",initialValue:"pp",validators:[]},
  ]

  constructor(){
    this.createMenuConfig();
  }
  inputFilds(event:any){
    console.log(event)
  }
}