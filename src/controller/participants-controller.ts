import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { participantService } from '../services/participants-service';

export async function participantPost(req: Request, res: Response) {
  const { name, balance } = req.body;
  try {
    const result = await participantService.createParticipant(name, balance);
    return res.status(httpStatus.OK).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

export async function participantGet(req: Request, res: Response) {
  const result = await participantService.findParticipant();
  return res.status(httpStatus.OK).send(result);
}
