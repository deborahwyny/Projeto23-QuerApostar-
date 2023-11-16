import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { betService } from '../services/bets-service';

export async function betsPost(req: Request, res: Response) {
  const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;

  const result = await betService.creatBets(homeTeamScore, awayTeamScore, amountBet, gameId, participantId);
  console.log(result, 'result');
  return res.status(httpStatus.OK).send(result);
}
