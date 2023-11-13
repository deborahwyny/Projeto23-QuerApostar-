import { Router } from 'express';
import { participantSchema } from '../schemmas/participants-schemma';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { participantGet, participantPost } from '../controller/participants-controller';

const participantRouter = Router();

participantRouter.post('/', schemaValidator(participantSchema), participantPost);
participantRouter.get('/', participantGet);

export default participantRouter;
