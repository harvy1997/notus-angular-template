import { Component,Input } from '@angular/core';
import { MenuModel } from './models';

@Component({
  selector: 'generic-slide-navbar',
  templateUrl: './slide-navbar.component.html',
  styleUrls: ['./slide-navbar.component.scss']
})
export class SlideNavbarComponent {
  collapseShow = "hidden";
  @Input("title")
  _title="";

  @Input("data")
  get data(): MenuModel[] {
    return this._menuData;
  }
  set data(data: MenuModel[]) {
    this._menuData = data;
  }
  protected _menuData:MenuModel[]=[];


  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes:any) {
    this.collapseShow = classes;
  }

}
