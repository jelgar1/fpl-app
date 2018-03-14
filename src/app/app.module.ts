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
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { FixturesComponent } from './fixtures/fixtures.component';
import { GameweekService } from './services/gameweek.service';
import { GameweekComponent } from './gameweek/gameweek.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TeamsComponent,
    TeamDetailsComponent,
    MessagesComponent,
    FixturesComponent,
    GameweekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    TeamService,
    MessageService,
    PlayerService,
    GameweekService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
