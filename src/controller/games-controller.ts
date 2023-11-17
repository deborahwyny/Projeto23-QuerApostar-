import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { gameService } from '../services/games-service';

export async function gamesPost(req: Request, res: Response) {
  const { homeTeamName, awayTeamName } = req.body;

  const result = await gameService.createGame(homeTeamName, awayTeamName);
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

export async function gamesPostWithId(req: Request, res: Response) {
  const gameId = Number(req.params.id);
  const { homeTeamScore, awayTeamScore } = req.body;
  try {
    const result = await gameService.postGameFinish(gameId, homeTeamScore, awayTeamScore);
    return res.status(httpStatus.OK).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
