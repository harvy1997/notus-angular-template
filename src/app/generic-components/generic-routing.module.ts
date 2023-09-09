import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';
import { NotusProfileComponent } from './notus-profile/notus-profile.component';

const routes: Routes = [
  {
    path:"",
    component:GenericComponent
  },
  {
    path:"profile",
    component:NotusProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRoutingModule { }
