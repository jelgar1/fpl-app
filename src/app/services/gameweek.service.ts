import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Gameweek } from '../models/gameweek';
import { MessageService } from './message.service';
import { ApiService } from './api.service';
import { FIXTURES } from '../mock-fixtures';

@Injectable()
export class GameweekService {

  constructor(private messageService: MessageService,
              private apiService: ApiService) { }

  getAllGameweeks(): Observable<Array<Gameweek>> {
    this.messageService.add('GameweekService: fetched gameweeks');
    return this.apiService.getMainUrl()
      .map((details: any) => details.events
        .map((gameweek: any) => Gameweek.fromJSON(gameweek)));
  }
}
