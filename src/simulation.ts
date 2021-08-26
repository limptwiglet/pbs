import { SetupTeam, State, Status, Team } from "./common/types";
import breakout from "./states/breakout";

const start = (teams: Team[]) => {
  let setupTeams = setup(teams);

  let state: State = {
    status: Status.Start,
    teams: setupTeams,
  };

  tick(state);
};

const setup = (teams: Team[]): SetupTeam[] => {
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
  breakout(state);
};

const end = () => {};

export { start, setup, tick, end };
