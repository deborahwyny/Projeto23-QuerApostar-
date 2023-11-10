import { Router } from 'express';
import { participantSchema } from '../schemmas/participants-schemma';
import { schemaValidator } from '../middlewares/schemma-validator-middleware';
import { participantPost } from '../controller/participants-controller';

const participantRouter = Router()

participantRouter.post('/', schemaValidator(participantSchema), participantPost)

export default participantRouter
