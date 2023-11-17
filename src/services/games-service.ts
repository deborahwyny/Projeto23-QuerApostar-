import { gameRepository } from '../repositories/games-repository';

async function createGame(homeTeamName: string, awayTeamName: string) {
  const create = await gameRepository.gameCreate(homeTeamName, awayTeamName);
  return create;
}

async function findGame() {
  const find = await gameRepository.gameFind();
  return find;
}

async function findGamesId(gameId: number) {
  const find = await gameRepository.gameWithBets(gameId);
  return find;
}

async function postGameFinish(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  const update = await gameRepository.gameFinish(gameId, homeTeamScore, awayTeamScore);
  return update;
}

export const gameService = {
  createGame,
  findGame,
  findGamesId,
  postGameFinish,
};
