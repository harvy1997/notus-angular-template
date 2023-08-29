import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { ConfigDropdown } from "./config/config-dropdowm";

@Component({
  selector: "app-notus-dropdown",
  templateUrl: "./notus-dropdown.component.html",
})
export class NotusDropdownComponent implements AfterViewInit {

  @Input()
  config:ConfigDropdown|null= null;

  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef | any={};
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef | any={};
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event:any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
