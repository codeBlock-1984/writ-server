import BaseLogic from './base.logic';
import Repository from '../repository';
import Utils from '../utils';

class ArticleLogic extends BaseLogic {
  static model() {
    return Repository.ArticleRepository.model();
  }

  static async getBySlug(slug) {
    return await Repository.ArticleRepository.getBySlug(slug);
  }

  static async get(id) {
    return await Repository.ArticleRepository.get(id, ArticleLogic.model());
  }

  static async create(data) {
    data.slug = Utils.StringUtil.randomString(10, 'url-safe');
    return await Repository.ArticleRepository.create(data);
  }

  static async iCreate(data, name = '') {
    return await Repository.ArticleRepository.iCreate({ name }, data, ArticleLogic.model());
  }

  static async update(id, data) {
    return await Repository.ArticleRepository.update(id, data);
  }

  static async list(page=1, limit=10, where={}, include=null, options={}) {
    return await Repository.ArticleRepository.list(ArticleLogic.model(), '/articles/', page, limit, where, include, options);
  }

  static async search(query) {
    return await Repository.ArticleRepository.search(query);
  }
}

export default ArticleLogic;
