import prisma from "../config/database";


async function participanteCreate(name: string, balance: number){

    const participant = await prisma.participantes.create({
        data: {
            name,
            balance
          }
    })

    return participant
}



export const participantRepository = {
    participanteCreate
}