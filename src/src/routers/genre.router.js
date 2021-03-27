import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .get('/:id', Controller.GenreController.get)
  .get('/', Controller.GenreController.list)
  .post('/', Controller.GenreController.create)
  .put('/:id', Controller.GenreController.update);

export default router;
