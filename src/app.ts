import express, { json } from 'express';
import cors from 'cors';
import participantRouter from './routers/participants-routers';
import gamesRouter from './routers/games-routers';
import betsRouts from './routers/bets-routers';

const app = express();

app.use(json());
app.use(cors());
app.use('/participant', participantRouter);
app.use('/games', gamesRouter);
app.use('/bets', betsRouts);

export default app;
