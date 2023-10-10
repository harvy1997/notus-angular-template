import { Component, OnInit, Input } from "@angular/core";
import { ConfigLogin } from "./config/config";

@Component({
  selector: "app-notus-login",
  templateUrl: "./notus-login.component.html"
})
export class NotusLoginComponent implements OnInit {
  navbarOpen = false;
  default={
    logo:"./assets/logoMiggoBlanco.png",
    signIn:(()=>{console.log("signIn");}),
    forgotPassword:(()=>{console.log("forgotPassword");})
  }
  @Input()
  config:ConfigLogin|null=new ConfigLogin("./assets/logoMiggoBlanco.png",(()=>{console.log("signIn");}),(()=>{console.log("forgotPassword");}));

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

}
