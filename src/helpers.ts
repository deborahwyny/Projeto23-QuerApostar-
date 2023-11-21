import { prisma } from './config/database';

export async function cleanDb() {
  await prisma.participantes.deleteMany({});
  await prisma.jogos.deleteMany({});
  await prisma.apostas.deleteMany({});
}
