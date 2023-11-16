import { betsRepository } from '../repositories/bets-repository';

async function creatBets(
  homeTeamName: number,
  awayTeamName: number,
  amountBet: number,
  gameId: number,
  participantId: number,
) {
  const bets = await betsRepository.betsCreate(homeTeamName, awayTeamName, amountBet, gameId, participantId);
  console.log(bets, 'bets');
  return bets;
}

export const betService = {
  creatBets,
};
