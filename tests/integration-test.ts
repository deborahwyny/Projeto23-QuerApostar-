import supertest from 'supertest';
import httpStatus from 'http-status';
import app, { init } from '../src/app';
import { cleanDb } from '../src/helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /participant', () => {
  it('should respond with status 400 if no participant have balance under 1000', async () => {
    try {
      await server.post('/participant').send({
        name: 'Participante com saldo abaixo',
        balance: 900,
      });
    } catch (err) {
      expect(err.response.status).toBe(httpStatus.BAD_REQUEST);
    }
  });
});

describe('POST /games', () => {
  it('should create a game', async () => {
    const gameData = {
      homeTeamName: 'Nome do Time da Casa',
      awayTeamName: 'Nome do Time Visitante',
    };

    const response = await server.post('/games').send(gameData);

    expect(response.status).toBe(httpStatus.OK);
  });
});

describe('POST /bets', () => {
  it('should return an error when creating a bet with a negative or zero amount', async () => {
    const invalidBetData = {
      homeTeamName: 'Home Team',
      awayTeamName: 'Away Team',
      amountBet: 0,
      gameId: 26,
      participantId: 27,
    };

    const response = await supertest(app).post('/bets').send(invalidBetData);

    expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
  });
});

describe('POST /bets', () => {
  it("should return an error when creating a bet with an amount greater than the participant's current balance", async () => {
    const invalidBetData = {
      homeTeamName: 'Home Team',
      awayTeamName: 'Away Team',
      amountBet: 150,
      gameId: 123,
      participantId: 456,
    };

    const response = await supertest(app).post('/bets').send(invalidBetData);

    expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
  });
});
