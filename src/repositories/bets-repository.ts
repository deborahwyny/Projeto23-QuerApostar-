import { prisma } from '../config/database';

async function betsCreate(
  homeTeamScore: number,
  awayTeamScore: number,
  amountBet: number,
  gameId: number,
  participantId: number,
) {
  const bets = await prisma.apostas.create({
    data: {
      homeTeamScore: homeTeamScore,
      awayTeamScore: awayTeamScore,
      amountBet: amountBet,
      gameId: gameId,
      participantId: participantId,
      status: 'pending',
      amountWon: 0,
    },
  });

  return bets;
}

async function betsUpdate(id: number, totalWinningAmount: number, won: boolean) {
  await prisma.apostas.update({
    where: { id: id },
    data: {
      status: won ? 'WON' : 'LOST',
      amountWon: totalWinningAmount,
    },
  });
}

async function findBets(gameId: number) {
  const bets = await prisma.apostas.findMany({
    where: { gameId: gameId },
  });
  return bets;
}
export const betsRepository = {
  betsCreate,
  betsUpdate,
  findBets,
};
