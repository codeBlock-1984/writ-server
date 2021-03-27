import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .get('/:id', Controller.ArticleController.get)
  .get('/', Controller.ArticleController.list)
  .post('/', Controller.ArticleController.create)
  .put('/:id', Controller.ArticleController.update);

export default router;
