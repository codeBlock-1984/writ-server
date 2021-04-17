import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .get('/:id', Controller.UserController.get)
  .get('/', Controller.UserController.list)
  .get('/:id/articles', Controller.UserController.getArticles)
  .post('/', Controller.UserController.create)
  .put('/:id', Controller.UserController.update);

export default router;
