import { participantRepository } from "../repositories/participants-repository"


async function createParticipant(name: string, balance:number){

    const create = await participantRepository.participanteCreate(name, balance)

    return create

}


export const participantService = {
    createParticipant
}