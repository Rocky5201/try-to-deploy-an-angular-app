import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavBarComponent,
    ProfileComponent,
    ListComponent,
    ContactComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
