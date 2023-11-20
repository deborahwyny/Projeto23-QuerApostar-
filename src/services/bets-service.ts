import { createParticipantBalanceError, gameAFinishError } from '../errors/erros';
import { Bet } from '../protocols';
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

  amountBets(amountBet, participants.balance);

  const game = await gameRepository.gameAlreadyFinish(gameId);
  if (!game) {
    throw new Error('game not found.');
  }
  if (game.isFinished) throw gameAFinishError();
  const bets = await betsRepository.betsCreate(homeTeamName, awayTeamName, amountBet, gameId, participantId);
  return bets;
}

async function amountBets(amountBet: number, balance: number) {
  if (amountBet > balance) throw createParticipantBalanceError();
}

async function betsStatusUpdate(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  const listBets = await betsRepository.findBets(gameId);
  if (!listBets) throw new Error('Bets not found.');

  const totalWinningAmount = sumWinners(listBets, awayTeamScore, homeTeamScore);

  const sumTotal = sumAll(listBets);

  for (const bet of listBets) {
    if (bet.awayTeamScore === awayTeamScore && bet.homeTeamScore === homeTeamScore) {
      const value = (bet.amountBet! / totalWinningAmount) * sumTotal * (1 - 0.3);
      await betsRepository.betsUpdate(bet.id, value, true);
    } else {
      await betsRepository.betsUpdate(bet.id, 0, false);
    }
  }
}

function sumWinners(listBets: Bet[], homeTeamScore: number, awayTeamScore: number) {
  const winningBets = listBets.filter(
    (bet) => bet.awayTeamScore === awayTeamScore && bet.homeTeamScore === homeTeamScore,
  );
  return winningBets.reduce((total, bet) => total + (bet.amountBet ?? 0), 0);
}

function sumAll(listBets: Bet[]) {
  return listBets.reduce((total, bet) => total + (bet.amountBet ?? 0), 0);
}
export const betService = {
  creatBets,
  betsStatusUpdate,
};
