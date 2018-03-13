import {Player} from './player';

export class Team {
  id: number;
  // players: Player[];
  playerIds: number[];
  name: string;
  owner: string;

  static fromJSON(obj: any): Team {
    return Object.assign(Object.create(Team.prototype), obj, {});
  }
}
