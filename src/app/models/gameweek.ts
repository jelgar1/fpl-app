import { Fixture } from './fixture';
import { FIXTURES } from '../mock-fixtures';

export class Gameweek {

  id: number;
  name: string;
  deadline_time: Date;
  finished: boolean;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;
  fixtures: Array<Fixture>;

  static fromJSON(obj: any): Gameweek {
    const gw =  Object.assign(Object.create(Gameweek.prototype), obj, {});
    if (FIXTURES.find((fixture) => fixture['gameweek'] === gw.id)) {
      gw.fixtures = FIXTURES.find((fixture) => fixture['gameweek'] === gw.id)['fixtures']
        .map(fixture => fixture = Fixture.getTeamNames(fixture));
    }
    return gw;
  }
}
