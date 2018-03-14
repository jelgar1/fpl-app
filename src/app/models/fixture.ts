import { FIXTURES } from '../mock-fixtures';
import { Gameweek } from './gameweek';
import { Team } from './team';
import { TEAMS } from '../mock-teams';
import { Player } from './player';

export class Fixture {
  id: number;
  team_a: Team;
  team_b: Team;

  static fromJSON(obj: any): Gameweek {
    const gw =  Object.assign(Object.create(Gameweek.prototype), obj, {});
    if (FIXTURES.find((fixture) => fixture['gameweek'] === gw.id)) {
      gw.fixtures = FIXTURES.find((fixture) => fixture['gameweek'] === gw.id)['fixtures'];
    }
    return gw;
  }
  static getTeamNames(obj: any): Fixture {
    const fixture =  Object.assign(Object.create(Fixture.prototype), obj, {});
    fixture.team_a = Team.fromJSON(TEAMS.find((team) => team['id'] === fixture.team_a));
    fixture.team_b = Team.fromJSON(TEAMS.find((team) => team['id'] === fixture.team_b));
    return fixture;
  }
}
