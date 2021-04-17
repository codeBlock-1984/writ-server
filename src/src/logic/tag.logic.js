import BaseLogic from './base.logic';
import Repository from '../repository';

class TagLogic extends BaseLogic {
  static model() {
    return Repository.TagRepository.model();
  }

  static async get(id) {
    return await Repository.TagRepository.get(id, TagLogic.model());
  }

  static async create(data) {
    return await Repository.TagRepository.create(data, TagLogic.model());
  }

  static async iCreate(data, name = '') {
    return await Repository.TagRepository.iCreate({ name }, data, TagLogic.model());
  }

  static async update(id, data) {
    return await Repository.TagRepository.update(id, data, TagLogic.model());
  }

  static async list(page=1, limit=10, where={}, include=null, options={}) {
    return await Repository.TagRepository.list(TagLogic.model(), '/tags/', page, limit, where, include, options);
  }
}

export default TagLogic;
