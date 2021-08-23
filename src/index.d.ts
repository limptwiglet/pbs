interface Player {
  name: string;
  stats: {
    speed: number;
    initiative: number;
  }
}

interface Team {
  players: Player[];
}
