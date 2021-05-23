import express from 'express';
import Controller from '../controller';
import Middleware from '../middleware';

const router = express.Router();

router
  .get('/search', Controller.ArticleController.search, Middleware.Interceptor.worker, Middleware.ResponseHandler.send)
  .get('/:slug', Controller.ArticleController.get)
  .get('/', Controller.ArticleController.list)
  .post('/', Controller.ArticleController.create)
  .put('/:id', Controller.ArticleController.update);

export default router;
