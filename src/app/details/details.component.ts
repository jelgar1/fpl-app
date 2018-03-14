import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mock-teams';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  teams = TEAMS;
  players: any
  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.playerService.getAllPlayers()
      .subscribe(data => console.log(data));
  }
}
