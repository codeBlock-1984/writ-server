import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .post('/register', Controller.AuthController.register)
  .post('/login', Controller.AuthController.login);

export default router;
