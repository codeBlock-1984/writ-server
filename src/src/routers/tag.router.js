import express from 'express';
import Controller from '../controller';
import Middleware from '../middleware';

const router = express.Router();

router
  .get('/search', Controller.TagController.search, Middleware.Interceptor.worker, Middleware.ResponseHandler.send)  
  .get('/:id', Controller.TagController.get)
  .get('/', Controller.TagController.list)
  .post('/', Controller.TagController.create)
  .put('/:id', Controller.TagController.update);

export default router;
