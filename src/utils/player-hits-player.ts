import { Player } from "../common/types";
import { MAX_STAT_LEVEL } from "../common/constants";

export enum HasHit {
  Hit,
  Miss,
}

// Calculate if another play hits another
// Very basic needs to consider
// Distance modifier
// Shooter moving modifier
// Moving target speed modifier
export default function playerHitsPlayer(
  shooter: Player,
  target: Player
): HasHit {
  const maxHitChance = 0.6;
  const maxTargetModifier = 0.1;

  const shooterAbility = (maxHitChance / MAX_STAT_LEVEL) * shooter.stats.laning;
  const targetModifiter =
    -(maxTargetModifier / MAX_STAT_LEVEL) * target.stats.speed;

  const rand = Math.random();

  if (rand < shooterAbility + targetModifiter) {
    return HasHit.Hit;
  } else {
    return HasHit.Miss;
  }
}
