import { createParticipantBalanceError, gameAFinishError } from '../errors/erros';
import { betsRepository } from '../repositories/bets-repository';
import { gameRepository } from '../repositories/games-repository';
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

  const game = await gameRepository.gameAlreadyFinish(gameId);
  if (!game) {
    throw new Error('game not found.');
  }
  if (game.isFinished) throw gameAFinishError();

  const bets = await betsRepository.betsCreate(homeTeamName, awayTeamName, amountBet, gameId, participantId);
  return bets;
}

export const betService = {
  creatBets,
};
