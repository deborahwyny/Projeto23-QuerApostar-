import { gameRepository } from '../repositories/games-repository';

async function createGame(home_team_name: string, away_team_name: string) {
  const create = await gameRepository.gameCreate(home_team_name, away_team_name);
  return create;
}

async function findGame() {
  const find = await gameRepository.gameFind();
  return find;
}

export const gameService = {
  createGame,
  findGame,
};
