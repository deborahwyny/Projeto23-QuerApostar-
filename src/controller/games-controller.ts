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

export async function gamesGetWithId(req: Request, res: Response) {
  const gameId = Number(req.params.id);

  const result = await gameService.findGamesId(gameId);
  return res.status(httpStatus.OK).send(result);
}

// export async function gamesPostWithId(req: Request, res: Response) {
//   const { home_team_name, away_team_name } = req.body;

//   const result = await gameService.postGamewithId(home_team_name, away_team_name);
//   return res.status(httpStatus.OK).send(result);
// }
