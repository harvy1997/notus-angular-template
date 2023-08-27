import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRoutingModule } from './generic-routing.module';
import { GenericComponent } from './generic/generic.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';


@NgModule({
  declarations: [
    GenericComponent,
    SimpleTableComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule
  ]
})
export class GenericModule { }
