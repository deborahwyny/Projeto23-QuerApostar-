import { Router } from 'express';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { bestSchemma } from '../schemmas/bets-schemma';
import { betsGet, betsPost } from '../controller/bets-controller';

const betsRouts = Router();

betsRouts.post('/', schemaValidator(bestSchemma), betsPost);
betsRouts.get('/id', betsGet);

export default betsRouts;
