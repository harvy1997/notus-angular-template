import { Component, OnInit, Input } from "@angular/core";
import { ConfigNavbar } from "./config/config-notus-navbar";

@Component({
  selector: "app-notus-navbar",
  templateUrl: "./notus-navbar.component.html",
})
export class NotusNavbarComponent implements OnInit {
  navbarOpen = false;

  @Input()
  config:ConfigNavbar|null= null;

  constructor() {}

  ngOnInit(): void {}

}
