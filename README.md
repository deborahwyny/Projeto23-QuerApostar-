# Projeto23-QuerApostar-
This is the documentation for the QuerApostar? API, a platform for betting on football games.

# Deployment Link
https://apostas-3cyh.onrender.com

# Getting Started
To initialize the project, follow the steps below:

Install dependencies using npm install.
Before starting the server, ensure that your database is correctly configured.
Execute Prisma migrations to create the necessary tables: npm run migration:run.
To start the server in development mode with nodemon, run npm run dev.

# Technical Requirements
The back-end of QuerApostar? has been built using the following technologies:

TypeScript
Node + Express
Prisma (ORM)
Postgres
Jest and Supertest
The project follows a Layered Architecture to ensure efficient code organization.

# Entities
Participant - Represents a bettor.
Game - Represents a football game.
Bet - Represents a bet made by a participant on a game.

# Routes
POST /participants - Creates a new participant with a specified initial balance.
POST /games - Creates a new game with an initial score of 0x0 and marked as not finished.
POST /bets - Registers a bet made by a participant on a specific game.



