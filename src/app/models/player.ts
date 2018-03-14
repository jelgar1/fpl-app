export class Player {
  id: number;
  web_name: string;
  goals_scored: number;
  threat: string;
  history: Array<any>;

  static fromJSON(obj: any): Player {
    return Object.assign(Object.create(Player.prototype), obj, {});
  }
}
