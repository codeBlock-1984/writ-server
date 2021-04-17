import Interface from '../interfaces';
import Logic from '../logic';
import BaseController from './base.controller';

class ClientController extends BaseController {
  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Logic.ClientLogic.get(id);
      res.locals.data = ClientController.success(200, `Client with ${id} fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ClientController.failure(404, `Client with ${id} not found`);
    } finally {
      next();
    }
  }

  static async create(req, res, next) {
    try {
      const data = await Logic.ClientLogic.create(req.body);
      res.locals.data = ClientController.success(200, `Client created successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ClientController.failure(400, `Client could not be created`);
    } finally {
      next();
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const obj = ClientController.parseUpdateData(Interface.clientInterface, req.body);
      const data = await Logic.ClientLogic.update(id, obj);
      res.locals.data = ClientController.success(200, `Client updated successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ClientController.failure(400, `Client could not be updated`);
    } finally {
      next();
    }
  }

  static async list(req, res, next) {
    try {
      const page = req.query.page ? req.query.page : 1;
      const limit = req.query.limit ? req.query.limit : 10;
      const data = await Logic.ClientLogic.list(page, limit);
      res.locals.data = ClientController.success(200, `Clients fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ClientController.failure(400, `Clients could not be fetched`);
    } finally {
      next();
    }
  }
}

export default ClientController;
