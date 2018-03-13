import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import {TeamDetailsComponent} from "./team-details/team-details.component";
import {TeamsComponent} from "./teams/teams.component";

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamDetailsComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
