import express, { json, Request, Response } from 'express';
import cors from 'cors';
import participantRouter from './routers/participants-routers';
import gamesRouter from './routers/games-routers';
import betsRouts from './routers/bets-routers';

const app = express();

app.use(json());
app.use(cors());
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});
app.use('/participant', participantRouter);
app.use('/games', gamesRouter);
app.use('/bets', betsRouts);

export default app;
