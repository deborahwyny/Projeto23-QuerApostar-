import { Router } from 'express';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { finishGame, gameSchema } from '../schemmas/games-schemma';
import { gamesGet, gamesGetWithId, gamesPost, gamesPostWithId } from '../controller/games-controller';

const gamesRouter = Router();
gamesRouter.post('/', schemaValidator(gameSchema), gamesPost);
gamesRouter.get('/', gamesGet);
gamesRouter.get('/:id', gamesGetWithId);
gamesRouter.post('/:id/finish', schemaValidator(finishGame), gamesPostWithId);

export default gamesRouter;
