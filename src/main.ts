import { setup } from './simulation';

const team1: Team = {
  players: [
    {
      name: 'Player 1',
      stats: {
        speed: 4,
        initiative: 10
      }
    }
  ]
};

const team2: Team = {
  players: [
    {
      name: 'Player 1',
      stats: {
        speed: 6,
        initiative: 10
      }
    }
  ]
};

setup([team1, team2]);
