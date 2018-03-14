import { Component, OnInit } from '@angular/core';
import { GameweekService } from '../services/gameweek.service';
import { Gameweek } from '../models/gameweek';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  gameweeks: Array<Gameweek> = [];

  constructor(private gameweekService: GameweekService) { }

  ngOnInit() {
    this.getGameweeks();
  }

  getGameweeks(): void {
    this.gameweekService.getAllGameweeks()
      .subscribe(gameweeks => this.gameweeks = gameweeks);
  }

}
