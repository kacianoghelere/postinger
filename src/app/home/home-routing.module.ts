import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HelpComponent } from "./help/help.component";
import { MainComponent } from "./main/main.component";

const homeRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {path: "",        component: MainComponent},
      {path: "about",   component: AboutComponent},
      {path: "contact", component: ContactComponent},
      {path: "help",    component: HelpComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
