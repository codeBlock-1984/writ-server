import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers';

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json({ type: 'application/json' }))
  .use(express.urlencoded({ extended: false }))
  .use('/api/v1', router);

export default app;
