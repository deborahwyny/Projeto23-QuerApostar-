import { Request, Response } from 'express'
import httpStatus from 'http-status';
import { participantService } from '../services/participants-service';



export async function participantPost(req: Request, res:Response){
    const { name, balance } = req.body

    const result = await participantService.createParticipant(name, balance)

    return res.status(httpStatus.OK).send(result);

}