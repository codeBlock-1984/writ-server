import Interface from '../interfaces';
import Helper from '../helpers';
import Logic from '../logic';
import BaseController from './base.controller';

class AuthController extends BaseController {
  static async register(req, res, next) {
    try {
      req.body.appid = Helper.Setting.get(Helper.settingTypes.appid);
      const data = await Logic.AuthLogic.register(req.body);
      res.locals.data = AuthController.success(201, `User successfully signed up`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = AuthController.failure(400, `User signup failed`);
    } finally {
      next();
    }
  }

  static async login(req, res, next) {
    try {
      const data = await Logic.AuthLogic.login(req.body);
      res.locals.data = AuthController.success(200, `User successfully logged in`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = AuthController.failure(400, `User login failed`);
    } finally {
      next();
    }
  }
}

export default AuthController;
