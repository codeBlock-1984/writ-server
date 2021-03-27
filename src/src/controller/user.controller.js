import Interface from '../interfaces';
import Logic from '../logic';
import BaseController from './base.controller';

class UserController extends BaseController {
  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Logic.UserLogic.get(id);
      res.locals.data = UserController.success(200, `User with ${id} fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = UserController.failure(404, `User with ${id} not found`);
    } finally {
      next();
    }
  }

  static async create(req, res, next) {
    try {
      const data = await Logic.UserLogic.create(req.body);
      res.locals.data = UserController.success(200, `User created successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = UserController.failure(400, `User could not be created`);
    } finally {
      next();
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const obj = UserController.parseUpdateData(Interface.userInterface, req.body);
      const data = await Logic.UserLogic.update(id, obj);
      res.locals.data = UserController.success(200, `User updated successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = UserController.failure(400, `User could not be updated`);
    } finally {
      next();
    }
  }

  static async list(req, res, next) {
    try {
      const data = await Logic.UserLogic.list();
      res.locals.data = UserController.success(200, `Users fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = UserController.failure(400, `Users could not be fetched`);
    } finally {
      next();
    }
  }
}

export default UserController;
