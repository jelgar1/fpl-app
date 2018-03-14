import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import {TeamDetailsComponent} from './team-details/team-details.component';
import {TeamsComponent} from './teams/teams.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { GameweekComponent } from './gameweek/gameweek.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'gameweek/:id', component: GameweekComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
