import { participantRepository } from '../repositories/participants-repository';

async function createParticipant(name: string, balance: number) {
  if (balance < 10) {
    throw new Error('Balance must be at least 10 for participant creation.');
  }

  const create = await participantRepository.participanteCreate(name, balance);

  return create;
}

export const participantService = {
  createParticipant,
};
