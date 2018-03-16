import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { PlayerService } from '../services/player.service';
import { ApiService } from '../services/api.service';
import { GameweekService } from '../services/gameweek.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private playerService: PlayerService,
              private apiService: ApiService,
              private gameWeekService: GameweekService) { }
  teams = TEAMS;
  players: any;
  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    console.log(this.gameWeekService.buildGameweeks());
  }
}
