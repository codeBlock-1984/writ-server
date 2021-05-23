import Interface from '../interfaces';
import Logic from '../logic';
import BaseController from './base.controller';

class TagController extends BaseController {
  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Logic.TagLogic.get(id);
      res.locals.data = TagController.success(200, `Tag with ${id} fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = TagController.failure(404, `Tag with ${id} not found`);
    } finally {
      next();
    }
  }

  static async create(req, res, next) {
    try {
      const data = await Logic.TagLogic.create(req.body);
      res.locals.data = TagController.success(200, `Tag created successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = TagController.failure(400, `Tag could not be created`);
    } finally {
      next();
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const obj = TagController.parseUpdateData(Interface.tagInterface, req.body);
      const data = await Logic.TagLogic.update(id, obj);
      res.locals.data = TagController.success(200, `Tag updated successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = TagController.failure(400, `Tag could not be updated`);
    } finally {
      next();
    }
  }

  static async list(req, res, next) {
    try {
      const page = req.query.page ? req.query.page : 1;
      const limit = req.query.limit ? req.query.limit : 10;
      const data = await Logic.TagLogic.list(page, limit);
      res.locals.data = TagController.success(200, `Tags fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = TagController.failure(400, `Tags could not be fetched`);
    } finally {
      next();
    }
  }

  static async search(req, res, next) {
    try {
      const q  = req.query.q;
      const data = await Logic.TagLogic.search(q);
      res.locals.data = TagController.success(200, `Tags searched with query ${q} successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = TagController.failure(400, `Tag search with query ${q} failed`);
    } finally {
      next();
    }
  }
}

export default TagController;
