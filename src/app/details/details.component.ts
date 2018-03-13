import { Component, OnInit } from '@angular/core';
import { TEAMS } from "../mock-teams";
import { TeamService } from '../services/team.service';
import { TeamsComponent } from '../teams/teams.component';
import { Team } from '../models/team';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  teams = TEAMS;
  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.apiService.getMainUrl()
      .subscribe(data => console.log(data));
  }
}
