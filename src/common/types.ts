export interface Player {
  name: string;
  state: PlayerState;
  breakoutMode: BreakoutModes,
  stats: {
    speed: number;
    initiative: number;
    laning: number;
  }
}

export enum BreakoutModes {
  Moving,
  Shooting,
  MovingShooting
}

export enum PlayerState {
  Ready,
  Out
}

export interface Team {
  players: Player[];
}

export interface State {
  status: Status;
  teams: SetupTeam[];
}

export interface SetupTeam extends Team {
  initiative: number;
}

export enum Status {
  Start
}


