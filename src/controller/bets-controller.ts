import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { betService } from '../services/bets-service';

export async function betsPost(req: Request, res: Response) {
  const { home_team_score, away_team_score, amount_bet, game_id, participant_id } = req.body;

  const result = await betService.creatBets(home_team_score, away_team_score, amount_bet, game_id, participant_id);
  console.log(result, 'result');
  return res.status(httpStatus.OK).send(result);
}
