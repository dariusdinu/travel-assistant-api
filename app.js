import cookieParser from 'cookie-parser';
import 'dotenv/config';

import express from 'express';
import logger from 'morgan';
import { connect } from './functions';
import { errorHandler } from './middleware';
import {
  completionsRouter,
  usersRouter,
  stopsRouter,
  tripsRouter,
  uploadRouter,
} from './routes';

const app = express();

connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/stops', stopsRouter);
app.use('/trips', tripsRouter);
app.use('/completions', completionsRouter);
app.use(uploadRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ name: 'NotFoundError', message: 'Unexpected route' });
});

export default app;
