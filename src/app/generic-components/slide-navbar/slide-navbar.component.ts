import { Component } from '@angular/core';

@Component({
  selector: 'generic-slide-navbar',
  templateUrl: './slide-navbar.component.html',
  styleUrls: ['./slide-navbar.component.scss']
})
export class SlideNavbarComponent {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes:any) {
    this.collapseShow = classes;
  }
}
