import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';
import { Location } from '@angular/common';
import { Team } from '../models/team';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input() team: Team = new Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getDetailedTeam();
  }

  getDetailedTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getAllPlayers()
      .subscribe((players: Array<Player>) => {
        console.log('Players: ', players);
        this.teamService.getTeam(id)
          .subscribe((team: Team) => {
            console.log('Team: ', team);
            this.team = this.loadPlayersInTeam(team, players);
          });
      });
  }

  loadPlayersInTeam(team: Team, players: Array<Player>) {
    team['players']  = [];
    team.playerIds.map((selectedPlayerId: number) => {
      const matchedPlayer = players.find((player) => player.id === selectedPlayerId);
      this.playerService.getOnePlayer(selectedPlayerId)
        .subscribe( (data: any) => {
          team.players.push(Object.assign(matchedPlayer, data));
        });
    });
    return team;
  }

  goBack(): void {
    this.location.back();
  }

}
