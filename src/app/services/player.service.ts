import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { Player } from '../models/player';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';
import { Team } from '../models/team';
import { TeamService } from './team.service';


@Injectable()
export class PlayerService {
  constructor(private messageService: MessageService,
              private apiService: ApiService,
              private teamService: TeamService) { }

  getAllPlayers(): Observable<Array<Player>> {
    this.messageService.add('PlayerService: fetched players');
    return this.apiService.getMainUrl()
      .map((details: any) => details.elements
        .map((player: any) => Player.fromJSON(player)));
  }

  getOnePlayer(id): Observable<Player> {
    this.messageService.add('PlayerService: fetched player');
    return this.apiService.getPlayerUrl(id)
      .map((player: any) => Player.fromJSON(player));
  }
}
