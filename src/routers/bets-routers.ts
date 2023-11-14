import { Router } from 'express';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { bestSchemma } from '../schemmas/bets-schemma';
import { betsPost } from '../controller/bets-controller';

const betsRouts = Router();

betsRouts.post('/', schemaValidator(bestSchemma), betsPost);

export default betsRouts;
