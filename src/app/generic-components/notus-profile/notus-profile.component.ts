import { Component, OnInit, Input } from "@angular/core";
import { ConfigProfile } from "./config/config-profile";

@Component({
  selector: "app-notus-profile",
  templateUrl: "./notus-profile.component.html",
})
export class NotusProfileComponent implements OnInit {

  @Input()
  edit:boolean|null=false;
  @Input()
  config:ConfigProfile|null=null;

  constructor() {}

  ngOnInit(): void {}
}
