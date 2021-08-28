import { State, BreakoutModes, Team, PlayerState } from "../common/types";
import playerHitsPlayer, { HasHit } from "../utils/player-hits-player";

export default function breakout(state: State) {
  teamShootAtOtherTeam(state.teams[0], state.teams[1]);
  teamShootAtOtherTeam(state.teams[1], state.teams[0]);
}

const teamShootAtOtherTeam = (shootingTeam: Team, targetTeam: Team) => {
  shootingTeam.players
    .filter((p) => p.breakoutMode === BreakoutModes.Shooting)
    .forEach((player) => {
      let target =
        targetTeam.players[
          Math.floor(Math.random() * targetTeam.players.length)
        ];

      const hasHit = playerHitsPlayer(player, target);

      if (hasHit === HasHit.Hit) {
        player.state = PlayerState.Out;
        console.log(`Player ${player.name} HIT ${target.name}`);
      } else {
        console.log(`Player ${player.name} MISSED ${target.name}`);
      }
    });
};
