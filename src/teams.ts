interface Team {
  averageInitiative: number;
  players: Player[];
}

interface Player {
  position: {
    x: number;
    y: number;
  };
  stats: {
    initiative: number;
  };
}

const TEAM1 = (): Team => ({
  averageInitiative: 0,
  players: [
    {
      position: { x: 0, y: 0 },
      stats: {
        initiative: 5,
      },
    },
  ],
});

const TEAM2 = () => ({
  averageInitiative: 0,
  players: [
    {
      stats: { initiative: 2 },
    },
  ],
});

export { TEAM1, TEAM2 };
