import { start } from './simulation';

const team1: Team = {
  players: [
    {
      name: 'Player 1',
      out: false,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    }
  ]
};

const team2: Team = {
  players: [
    {
      name: 'Player 1',
      out: false,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    }
  ]
};

start([team1, team2]);
