import { State, Player, PlayerState, BreakoutModes } from "../common/types";
import weightedRandom from "../utils/weighted-random";

export default function breakout(state: State) {
  // Find all moving players as flat array
  // Find all shooting players
  //  Shooting players are grouped by team and reversed [[Team1Players], [Team0Players]]
  // ERROR
  // This should just be players shooting at any other player, they pick a player to shoot at
  // if the player is moving thye get a modifier based on their speed
  const movingPlayers = state.teams.map((team) => team.players.filter(p => p.breakoutMode === BreakoutModes.Moving)).flat();
  const shootingPlayers = state.teams.map(team => team.players.filter(p => p.breakoutMode === BreakoutModes.Shooting)).reverse();

  // Splice together the shooters and movers
  // TO-DO: Ensure that once a shooter has fired at a player, can they shoot again? Perhaps skill based
  let moversAndShooters: Array<[Player, Player[]]> = movingPlayers.map((player, i) => ([player, shootingPlayers[i] ?? []]));

  moversAndShooters.forEach(([mover, shooters]) => {
    const playerHit = weightedRandom([mover.stats.speed, ...shooters.map(s => s.stats.laning)]);

    console.log(`Player "${mover.name}" is attempting to move`);

    if (playerHit) {
      console.log(`Player "${mover.name}" moving was shot by "${shooters[playerHit - 1].name}"`);
      mover.state = PlayerState.Out;
    } else {
      console.log(`Player "${mover.name}" moved safely`);
    }
  });
};
