import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json({ type: 'application/json' }))
  .use(express.urlencoded({ extended: false }));

export default app;
