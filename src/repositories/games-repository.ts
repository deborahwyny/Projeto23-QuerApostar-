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

async function findGameId(gameId: number) {
  const game = await prisma.jogos.findFirst({
    where: { id: gameId },
  });
  return game;
}

async function gameWithBets(gameId: number) {
  const game = await prisma.jogos.findFirst({
    where: { id: gameId },
    select: {
      id: true,
      away_team_name: true,
      away_team_score: true,
      created_at: true,
      home_team_name: true,
      home_team_score: true,
      is_finished: true,
      updated_at: true,
      apostas: {
        where: { game_id: gameId },
      },
    },
  });
  return game;
}
// async function gameFinish(home_team_name: number, away_team_name: number) {}

export const gameRepository = {
  gameCreate,
  gameFind,
  findGameId,
  gameWithBets,
};
