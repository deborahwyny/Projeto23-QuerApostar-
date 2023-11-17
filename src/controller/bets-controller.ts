import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { betService } from '../services/bets-service';

export async function betsPost(req: Request, res: Response) {
  const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;
  try {
    const result = await betService.creatBets(homeTeamScore, awayTeamScore, amountBet, gameId, participantId);
    return res.status(httpStatus.OK).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
