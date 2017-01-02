import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './feed/feed.component';
import { PublishComponent } from './publish/publish.component';

@NgModule({
  imports: [ CommonModule, HomeRoutingModule ],
  declarations: [
    AboutComponent,
    ContactComponent,
    HelpComponent,
    HomeComponent,
    MainComponent,
    FeedComponent,
    PublishComponent
  ]
})
export class HomeModule { }
