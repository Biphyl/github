
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { SearchbarComponent } from '../searchbar/searchbar.component';

import { DisplayResultComponent } from '../display-result/display-result.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes:Routes=[
  {path:"resultdisplay",component:DisplayResultComponent},
  {path:"searchbar",component:SearchbarComponent},
  {path:'searchbar/:id',component:SearchbarComponent},
  {path:"",redirectTo:"/searchbar",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
   
  ],
  exports:[RouterModule],
  declarations: [
  //   SearchbarComponent,
  //   //UserdisplayComponent,
  //   ResultdisplayComponent,
  //   NotFoundComponent,
  ]
  
})
export class RoutingModule { }
