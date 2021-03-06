import { Injectable } from '@angular/core';
import {Team} from '../models/team';
import { TEAMS } from '../mock-teams';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class TeamService {
  constructor(private messageService: MessageService
  ) { }

  getTeams(): Observable<Team[]> {
    this.messageService.add('TeamService: fetched teams');
    return of(TEAMS.map(team => Team.fromJSON(team)));
  }
  getTeam(id: number): Observable<Team> {
    // Todo: send the message _after_ fetching the team
    this.messageService.add(`TeamService: fetched team id=${id}`);
    return of(Team.fromJSON(TEAMS.find(team => team['id'] === id)));
  }

}
