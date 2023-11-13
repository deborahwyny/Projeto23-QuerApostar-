import { betsRepository } from '../repositories/bets-repository';

async function creatBets(
  home_team_score: number,
  away_team_score: number,
  amount_bet: number,
  game_id: number,
  participant_id: number,
) {
  const bets = await betsRepository.betsCreate(home_team_score, away_team_score, amount_bet, game_id, participant_id);
  console.log(bets, 'bets');
  return bets;
}

async function findBets() {
  const bets = await betsRepository.betsFind();
  return bets;
}

export const betService = {
  creatBets,
  findBets,
};
