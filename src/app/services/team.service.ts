import { Injectable } from '@angular/core';
import {Team} from '../models/team';
import { TEAMS } from '../mock-teams';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class TeamService {
  constructor(private messageService: MessageService) { }
  getTeams(): Observable<Team[]> {
    this.messageService.add('TeamService: fetched teams');
    return of(TEAMS);
  }
  getTeam(id: number): Observable<Team> {
    // Todo: send the message _after_ fetching the team
    this.messageService.add(`TeamService: fetched team id=${id}`);
    return of(TEAMS.find(team => team.id === id));
  }
}
