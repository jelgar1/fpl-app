import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameweekService } from '../services/gameweek.service';
import { Gameweek } from '../models/gameweek';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-gameweek',
  templateUrl: './gameweek.component.html',
  styleUrls: ['./gameweek.component.css']
})
export class GameweekComponent implements OnInit {
  gameweek: Gameweek = new Gameweek;

  constructor(private route: ActivatedRoute,
              private gameweekService: GameweekService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.getGameweek();
  }

  getGameweek() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameweekService.getAllGameweeks()
      .subscribe((gameweeks) => {
        this.gameweek = gameweeks.find((gameweek) => gameweek.id === id);
        this.gameweek.fixtures.map((fixture) => {
          this.playerService.getAllPlayers()
            .subscribe((players: Array<Player>) => {
              fixture.team_a = this.loadPlayersInTeam(fixture.team_a, players);
              fixture.team_b = this.loadPlayersInTeam(fixture.team_b, players);
            });
        });
      });
  }

  loadPlayersInTeam(team: Team, players: Array<Player>) {
    team['players']  = [];
    team.playerIds.map((selectedPlayerId: number) => {
      const matchedPlayer = players.find((player) => player.id === selectedPlayerId);
      this.playerService.getOnePlayer(selectedPlayerId)
        .subscribe( (data: any) => {
          data.history = data.history[+this.route.snapshot.paramMap.get('id') - 1];
          team.players.push(Object.assign(matchedPlayer, data));
        });
    });
    return team;
  }

  calculateScore(team: Team): number {
    if (team.players === undefined) {
      return 0;
    } else {
      let score = 0;
      team.players.map((player) => {
        console.log(player)
        console.log(player.history['goals_scored']);
        score += player.history['goals_scored'];
      });
      return score;
    }
  }
}
