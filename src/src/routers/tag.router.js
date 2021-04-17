import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .get('/:id', Controller.TagController.get)
  .get('/', Controller.TagController.list)
  .post('/', Controller.TagController.create)
  .put('/:id', Controller.TagController.update);

export default router;
