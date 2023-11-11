import { Router } from 'express';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { gameSchema } from '../schemmas/games-schemma';
import { gamesGet, gamesPost } from '../controller/games-controller';

const gamesRouter = Router();
gamesRouter.post('/', schemaValidator(gameSchema), gamesPost);
gamesRouter.get('/', gamesGet);

export default gamesRouter;
