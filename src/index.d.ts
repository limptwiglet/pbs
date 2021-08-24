interface Player {
  name: string;
  out: boolean;
  stats: {
    speed: number;
    initiative: number;
    laning: number;
  }
}

interface Team {
  players: Player[];
}
