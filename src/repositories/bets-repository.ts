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
    },
  });

  return bets;
}

export const betsRepository = {
  betsCreate,
};
