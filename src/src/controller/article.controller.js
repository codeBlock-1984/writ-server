import Interface from '../interfaces';
import Logic from '../logic';
import BaseController from './base.controller';

class ArticleController extends BaseController {
  static async get(req, res, next) {
    try {
      const { slug } = req.params;
      const data = await Logic.ArticleLogic.getBySlug(slug);
      res.locals.data = ArticleController.success(200, `Article with slug ${slug} fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ArticleController.failure(404, `Article with slug ${slug} not found`);
    } finally {
      next();
    }
  }

  static async create(req, res, next) {
    try {
      const data = await Logic.ArticleLogic.create(req.body);
      res.locals.data = ArticleController.success(201, `Article created successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ArticleController.failure(400, `Article could not be created`);
    } finally {
      next();
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const obj = ArticleController.parseUpdateData(Interface.articleInterface, req.body);
      const data = await Logic.ArticleLogic.update(id, obj);
      res.locals.data = ArticleController.success(200, `Article updated successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ArticleController.failure(400, `Article could not be updated`);
    } finally {
      next();
    }
  }

  static async list(req, res, next) {
    try {
      const page = req.query.page ? req.query.page : 1;
      const limit = req.query.limit ? req.query.limit : 10;
      const genreid = req.query.genre;
      const where = genreid ? { genreid } : {};
      const data = await Logic.ArticleLogic.list(page, limit, where);
      res.locals.data = ArticleController.success(200, `Articles fetched successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ArticleController.failure(400, `Articles could not be fetched`);
    } finally {
      next();
    }
  }

  static async search(req, res, next) {
    try {
      const q  = req.query.q;
      const data = await Logic.ArticleLogic.search(q);
      res.locals.data = ArticleController.success(200, `Articles searched with query ${q} successfully`, data);
    } catch (error) {
      res.locals.error = error;
      res.locals.data = ArticleController.failure(400, `Articles search with query ${q} failed`);
    } finally {
      next();
    }
  }
}

export default ArticleController;
