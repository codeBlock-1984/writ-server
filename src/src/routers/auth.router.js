import express from 'express';
import Controller from '../controller';

const router = express.Router();

router
  .post('/register', Controller.AuthController.register)
  .post('/login', Controller.AuthController.login)
  .post('/verify', Controller.AuthController.verify);

export default router;
