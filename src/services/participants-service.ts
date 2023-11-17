import { banlanceError } from '../errors/erros';
import { participantRepository } from '../repositories/participants-repository';

async function createParticipant(name: string, balance: number) {
  if (balance < 1000) {
    throw banlanceError();
  }
  const create = await participantRepository.participanteCreate(name, balance);

  return create;
}

async function findParticipant() {
  const find = await participantRepository.participantFind();
  return find;
}

export const participantService = {
  createParticipant,
  findParticipant,
};
