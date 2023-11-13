import joi from 'joi';

export const bestSchemma = joi.object({
  home_team_score: joi.number().required(),
  away_team_score: joi.number().required(),
  amount_bet: joi.number().required(),
  game_id: joi.number().required(),
  participant_id: joi.number().required(),
});
