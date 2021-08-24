import weightedRandom from "./utils/weighted-random";

interface SetupTeam extends Team {
  initiative: number;
}

enum Status {
  Start
}

interface State {
  status: Status;
  teams: SetupTeam[];
}

const start = (teams: Team[]) => {
  let setupTeams = setup(teams);

  let state: State = {
    status: Status.Start,
    teams: setupTeams
  };

  tick(state);
};

const setup = (teams: Team[]): SetupTeam[] => {
  // Calculate teams initaive

  return teams.map((team) => {
    return {
      initiative:
        team.players.reduce((acc, player) => acc + player.stats.initiative, 0) /
        team.players.length,
      players: [...team.players],
    };
  });
};

const tick = (state: State) => {
  // Move player
  const playerMoving = state.teams[0].players[0];
  console.log('Player moving: ', playerMoving.name);

  const playerShooting = state.teams[1].players[0];

  const playerHit = weightedRandom([playerMoving.stats.speed, playerShooting.stats.laning]);

  if (playerHit) {
    state.teams[0].players[0].out = true;
    console.log('Player shot moving', playerMoving.name);
  } else {
    console.log('Player moved successfully');
  }
};

const end = () => { };

export { start, setup, tick, end };
