import joi from 'joi';

export const gameSchema = joi.object({
  home_team_name: joi.string().required(),
  away_team_name: joi.string().required(),
});
