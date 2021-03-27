import Interface from '../interfaces';
import Logic from '../logic';
import BaseController from './base.controller';

class GenreController extends BaseController {
  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Logic.GenreLogic.get(id);
      res.locals.data = GenreController.success(200, `Genre with ${id} fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = GenreController.failure(404, `Genre with ${id} not found`);
    } finally {
      next();
    }
  }

  static async create(req, res, next) {
    try {
      const data = await Logic.GenreLogic.create(req.body);
      res.locals.data = GenreController.success(200, `Genre created successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = GenreController.failure(400, `Genre could not be created`);
    } finally {
      next();
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const obj = GenreController.parseUpdateData(Interface.genreInterface, req.body);
      const data = await Logic.GenreLogic.update(id, obj);
      res.locals.data = GenreController.success(200, `Genre updated successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = GenreController.failure(400, `Genre could not be updated`);
    } finally {
      next();
    }
  }

  static async list(req, res, next) {
    try {
      const data = await Logic.GenreLogic.list();
      res.locals.data = GenreController.success(200, `Genres fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = GenreController.failure(400, `Genres could not be fetched`);
    } finally {
      next();
    }
  }
}

export default GenreController;
