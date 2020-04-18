
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { RequestService } from './user-request/request.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { hoverDirective } from './hover.directive'

const routes: Routes = [
  { path: "resultdisplay", component: DisplayResultComponent },
  { path: "searchbar", component: SearchbarComponent },
  { path: "", redirectTo: "/searchbar", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DisplayResultComponent,
    NotFoundComponent,
    hoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

