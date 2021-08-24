import { setup } from "../simulation";

describe("simulation", () => {
  it("should setup", () => {
    const team1: Team = {
      players: [
        {
          name: "Player1",
          out: false,
          stats: {
            speed: 2,
            initiative: 2,
            laning: 1,
          },
        },
        {
          name: "Player2",
          out: false,
          stats: {
            speed: 3,
            initiative: 3,
            laning: 1,
          },
        },
      ],
    };
    const team2: Team = {
      players: [
        {
          name: "Player1",
          out: false,
          stats: {
            speed: 2,
            initiative: 2,
            laning: 1,
          },
        },
        {
          name: "Player2",
          out: false,
          stats: {
            speed: 3,
            initiative: 3,
            laning: 1,
          },
        },
      ],
    };

    expect(setup([team1, team2]));
  });
});
