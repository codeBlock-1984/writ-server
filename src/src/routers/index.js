import express from 'express';
import Middleware from '../middleware';
import clientRouter from './client.router';
import userRouter from './user.router';
import authRouter from './auth.router';
import articleRouter from './article.router';
import genreRouter from './genre.router';
import tagRouter from './tag.router';

const router = express.Router();

router
  .use('/clients', clientRouter)
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/articles', articleRouter)
  .use('/genres', genreRouter)
  .use('/tags', tagRouter)
  .use('*', Middleware.Interceptor.pathError)
  .use(Middleware.Interceptor.worker)
  .use(Middleware.ResponseHandler.send);

export default router;
