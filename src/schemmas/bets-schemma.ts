import joi from 'joi';

export const bestSchemma = joi.object({
  homeTeamScore: joi.number().required(),
  awayTeamScore: joi.number().required(),
  amountBet: joi.number().required(),
  gameId: joi.number().required(),
  participantId: joi.number().required(),
});
