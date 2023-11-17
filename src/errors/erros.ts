import httpStatus from 'http-status';
import { ApplicationError } from '../protocols';

export function banlanceError(): ApplicationError {
  return {
    name: 'InvalidBanlance',
    message: 'the initial balance cannot be less than R$10.00.',
    statusCode: httpStatus.UNAUTHORIZED,
  };
}

export function createParticipantBalanceError(): ApplicationError {
  return {
    name: 'ParticipantBalanceError',
    message: 'A bet with a value greater than the participants current balance cannot be created.',
    statusCode: httpStatus.BAD_REQUEST,
  };
}

export function gameAFinishError(): ApplicationError {
  return {
    name: 'gameAFinishError',
    message: 'game already finished',
    statusCode: httpStatus.BAD_REQUEST,
  };
}
