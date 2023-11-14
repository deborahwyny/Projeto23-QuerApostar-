import { prisma } from '../config/database';

async function betsCreate(
  home_team_score: number,
  away_team_score: number,
  amount_bet: number,
  game_id: number,
  participant_id: number,
) {
  const bets = await prisma.apostas.create({
    data: {
      home_team_score: home_team_score,
      away_team_score: away_team_score,
      amount_bet: amount_bet,
      game_id: game_id,
      participant_id: participant_id,
    },
  });

  return bets;
}

export const betsRepository = {
  betsCreate,
};
