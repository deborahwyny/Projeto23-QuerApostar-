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

async function participantFind() {
  const participant = await prisma.participantes.findMany();
  return participant;
}

export const participantRepository = {
  participanteCreate,
  participantFind,
};
