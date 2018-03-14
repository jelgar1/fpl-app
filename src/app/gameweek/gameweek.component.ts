import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameweekService } from '../services/gameweek.service';
import { Gameweek } from '../models/gameweek';

@Component({
  selector: 'app-gameweek',
  templateUrl: './gameweek.component.html',
  styleUrls: ['./gameweek.component.css']
})
export class GameweekComponent implements OnInit {
  gameweek: Gameweek = new Gameweek;

  constructor(private route: ActivatedRoute,
              private gameweekService: GameweekService) { }

  ngOnInit() {
    this.getGameweek();
  }

  getGameweek() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameweekService.getAllGameweeks()
      .subscribe((gameweeks) => {
        this.gameweek = gameweeks.find((gameweek) => gameweek.id === id);
        console.log(this.gameweek);
      });
  }

}
