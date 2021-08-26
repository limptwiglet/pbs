import { Team, PlayerState, BreakoutModes } from './common/types';
import { start } from './simulation';

const team1: Team = {
  players: [
    {
      name: 'T1 P 1',
      state: PlayerState.Ready,
      breakoutMode: BreakoutModes.Moving,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T1 P 2',
      state: PlayerState.Ready,
      breakoutMode: BreakoutModes.Shooting,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T1 P 3',
      state: PlayerState.Ready,
      breakoutMode: BreakoutModes.Shooting,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T1 P 4',
      state: PlayerState.Ready,
      breakoutMode: BreakoutModes.Shooting,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T1 P 5',
      state: PlayerState.Ready,
      breakoutMode: BreakoutModes.Shooting,
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
      name: 'T2 P 1',
      breakoutMode: BreakoutModes.Moving, state: PlayerState.Ready,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T2 P 2',
      breakoutMode: BreakoutModes.Moving,
      state: PlayerState.Ready,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T2 P 3',
      breakoutMode: BreakoutModes.Shooting,
      state: PlayerState.Ready,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T2 P 4',
      breakoutMode: BreakoutModes.Shooting,
      state: PlayerState.Ready,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
    {
      name: 'T2 P 5',
      breakoutMode: BreakoutModes.Shooting,
      state: PlayerState.Ready,
      stats: {
        speed: 6,
        initiative: 10,
        laning: 5
      }
    },
  ]
};

start([team1, team2]);
