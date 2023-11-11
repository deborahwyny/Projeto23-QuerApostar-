import { prisma } from '../config/database';

async function gameCreate(home_team_name: string, away_team_name: string) {
  const game = await prisma.jogos.create({
    data: {
      home_team_name: home_team_name,
      away_team_name: away_team_name,
      home_team_score: 0,
      away_team_score: 0,
      is_finished: false,
    },
  });

  return game;
}

async function gameFind() {
  const game = await prisma.jogos.findMany();
  return game;
}

export const gameRepository = {
  gameCreate,
  gameFind,
};
