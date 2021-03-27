import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .get('/:id', Controller.ClientController.get)
  .get('/', Controller.ClientController.list)
  .post('/', Controller.ClientController.create)
  .put('/:id', Controller.ClientController.update);

export default router;
