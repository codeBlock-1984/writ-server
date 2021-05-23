import BaseLogic from './base.logic';
import ArticleLogic from './article.logic';
import Repository from '../repository';

class UserLogic extends BaseLogic {
  static model() {
    return Repository.UserRepository.model();
  }

  static async get(id) {
    return await Repository.UserRepository.get(id, UserLogic.model());
  }

  static async getByAuth(id) {
    return await Repository.UserRepository.getByAuth(id, UserLogic.model());
  }

  static async create(data) {
    return await Repository.UserRepository.create(data, UserLogic.model());
  }

  static async iCreate(data, name = '') {
    return await Repository.UserRepository.iCreate({ name }, data, UserLogic.model());
  }

  static async update(id, data) {
    return await Repository.UserRepository.update(id, data, UserLogic.model());
  }

  static async list(page=1, limit=10, where={}, include=null, options={}) {
    return await Repository.UserRepository.list(UserLogic.model(), '/users/', page, limit, where, include, options);
  }

  static async getArticles(id, page=1, limit=10, include=null, options={}) {
    return await ArticleLogic.list(page, limit, { userid: id }, include, options);
  }
}

export default UserLogic;
