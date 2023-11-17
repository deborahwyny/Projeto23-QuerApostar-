import { prisma } from '../config/database';

async function gameCreate(homeTeamName: string, awayTeamName: string) {
  const game = await prisma.jogos.create({
    data: {
      homeTeamName: homeTeamName,
      awayTeamName: awayTeamName,
      homeTeamScore: 0,
      awayTeamScore: 0,
      isFinished: false,
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
      awayTeamName: true,
      awayTeamScore: true,
      createdAt: true,
      homeTeamName: true,
      homeTeamScore: true,
      isFinished: true,
      updatedAt: true,
      apostas: {
        where: { gameId: gameId },
      },
    },
  });
  return game;
}

async function gameFinish(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  const game = await prisma.jogos.update({
    where: { id: gameId },
    data: {
      homeTeamScore: homeTeamScore,
      awayTeamScore: awayTeamScore,
      isFinished: true,
    },
  });
  return game;
}

async function gameAlreadyFinish(gameId: number) {
  const game = await prisma.jogos.findFirst({
    where: { id: gameId },
  });

  return game;
}

export const gameRepository = {
  gameCreate,
  gameFind,
  findGameId,
  gameWithBets,
  gameFinish,
  gameAlreadyFinish,
};
