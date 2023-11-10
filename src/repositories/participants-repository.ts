import { prisma } from '../config/database';

async function participanteCreate(name: string, balance: number) {
  const participant = await prisma.participantes.create({
    data: {
      name: name,
      balance: balance,
    },
  });

  return participant;
}

export const participantRepository = {
  participanteCreate,
};
