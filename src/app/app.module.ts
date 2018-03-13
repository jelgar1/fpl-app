import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamService } from './services/team.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TeamsComponent,
    TeamDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TeamService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
