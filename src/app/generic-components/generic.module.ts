import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRoutingModule } from './generic-routing.module';
import { GenericComponent } from './generic/generic.component';

import { SlideNavbarComponent } from './slide-navbar/slide-navbar.component';
import { TableComponent } from './notus-table/table.component';
import { TableSimpleComponent } from './table-simple/table-simple.component';
<<<<<<< Updated upstream
import { NotusDropdownComponent } from './notus-dropdown/notus-dropdown.component';
import { NotusNavbarComponent } from './notus-navbar/notus-navbar.component';
import { NotusProfileComponent } from './notus-profile/notus-profile.component';
=======
import { ToggleDirective } from '../generic-directives/toggle/toggle.directive';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    GenericComponent,
    TableSimpleComponent,
    SlideNavbarComponent,
    TableComponent,
<<<<<<< Updated upstream
    NotusDropdownComponent,
    NotusNavbarComponent,
    NotusProfileComponent
=======
    ToggleDirective
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    GenericRoutingModule
  ]
})
export class GenericModule { }
