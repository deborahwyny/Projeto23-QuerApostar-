import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { gameService } from '../services/games-service';

export async function gamesPost(req: Request, res: Response) {
  const { home_team_name, away_team_name } = req.body;

  const result = await gameService.createGame(home_team_name, away_team_name);

  return res.status(httpStatus.OK).send(result);
}

export async function gamesGet(req: Request, res: Response) {
  const result = await gameService.findGame();

  return res.status(httpStatus.OK).send(result);
}
