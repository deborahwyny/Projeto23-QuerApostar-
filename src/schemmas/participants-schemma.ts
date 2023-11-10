import joi from 'joi';

export const participantSchema = joi.object({
  name: joi.string().required(),
  balance: joi.number().integer().required(),
});
