import { createParticipantBalanceError } from '../errors/erros';
import { betsRepository } from '../repositories/bets-repository';
import { participantRepository } from '../repositories/participants-repository';

async function creatBets(
  homeTeamName: number,
  awayTeamName: number,
  amountBet: number,
  gameId: number,
  participantId: number,
) {
  const participants = await participantRepository.participantFindId(participantId);
  if (!participants) {
    throw new Error('Participant not found.');
  }
  if (amountBet > participants.balance) throw createParticipantBalanceError();

  const bets = await betsRepository.betsCreate(homeTeamName, awayTeamName, amountBet, gameId, participantId);
  return bets;
}

export const betService = {
  creatBets,
};
