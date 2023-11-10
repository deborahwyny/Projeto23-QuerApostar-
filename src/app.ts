import express, { json } from 'express';
import cors from 'cors';
import participantRouter from './routers/participants-routers';

const app = express();

app.use(json());
app.use(cors());
app.use('/participant', participantRouter);

export default app;
