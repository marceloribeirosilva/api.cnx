import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import winston from 'winston';
import expressWinston from 'express-winston';

import AppError from '@shared/errors/AppError';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';
import '@shared/container/providers';

const app = express();
app.use(cors());

app.use(express.json());

app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.File({
        filename: 'requests.log',
      }),
    ],
    format: winston.format.combine(
      winston.format.timestamp({
        format: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
      }),
      winston.format.json(),
    ),
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: false,
  }),
);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
