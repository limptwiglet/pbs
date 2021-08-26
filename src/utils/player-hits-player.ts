import { Player } from "../common/types";
import weightedRandom from "./weighted-random";

export enum HasHit {
  Hit,
  Miss
}

// Calculate if another play hits another
// Very basic needs to consider
// Distance modifier
// Shooter moving modifier
// Moving target speed modifier
export default function playerHitsPlayer(shooter: Player, target: Player): HasHit {
  const result = weightedRandom([target.stats.speed, shooter.stats.laning]);

  if (result === 0) {
    return HasHit.Miss;
  }

  return HasHit.Hit;
}
