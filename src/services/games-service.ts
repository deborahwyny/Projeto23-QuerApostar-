import { gameRepository } from '../repositories/games-repository';

async function createGame(home_team_name: string, away_team_name: string) {
  const create = await gameRepository.gameCreate(home_team_name, away_team_name);
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

// async function postGamewithId(home_team_name: number, away_team_name: number) {
//   const find = await gameRepository.gameFinish(home_team_name, away_team_name);
//   return find;
// }

export const gameService = {
  createGame,
  findGame,
  findGamesId,
};
