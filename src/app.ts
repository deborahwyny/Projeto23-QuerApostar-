import express, { json, Request, Response, Express } from 'express';
import cors from 'cors';
import participantRouter from './routers/participants-routers';
import gamesRouter from './routers/games-routers';
import betsRouts from './routers/bets-routers';
import { connectDb, disconnectDB } from './config/database';

const app = express();

app.use(json());
app.use(cors());
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});
app.use('/participant', participantRouter);
app.use('/games', gamesRouter);
app.use('/bets', betsRouts);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
