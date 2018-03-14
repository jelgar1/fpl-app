import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { Player } from '../models/player';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';


@Injectable()
export class PlayerService {
  constructor(private messageService: MessageService,
              private apiService: ApiService) { }

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
