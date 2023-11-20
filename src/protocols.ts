export type ApplicationError = {
  name: string;
  message: string;
  statusCode: number;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type Bet = {
  id: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  homeTeamScore: number | null;
  awayTeamScore: number | null;
  amountBet: number | null;
  gameId: number | null;
  participantId: number | null;
  status: string | null;
  amountWon: number | null;
};
