import joi from 'joi';

export const gameSchema = joi.object({
  homeTeamName: joi.string().required(),
  awayTeamName: joi.string().required(),
});

export const finishGame = joi.object({
  homeTeamScore: joi.number().required(),
  awayTeamScore: joi.number().required(),
});
