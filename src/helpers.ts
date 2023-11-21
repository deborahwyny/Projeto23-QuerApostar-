import { prisma } from './config/database';

export async function cleanDb() {
  await prisma.apostas.deleteMany({});
  await prisma.jogos.deleteMany({});
  await prisma.participantes.deleteMany({});
}
