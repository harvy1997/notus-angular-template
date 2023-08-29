import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRoutingModule } from './generic-routing.module';
import { GenericComponent } from './generic/generic.component';

import { SlideNavbarComponent } from './slide-navbar/slide-navbar.component';
import { TableComponent } from './notus-table/table.component';
import { TableSimpleComponent } from './table-simple/table-simple.component';
import { NotusDropdownComponent } from './notus-dropdown/notus-dropdown.component';


@NgModule({
  declarations: [
    GenericComponent,
    TableSimpleComponent,
    SlideNavbarComponent,
    TableComponent,
    NotusDropdownComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule
  ]
})
export class GenericModule { }
