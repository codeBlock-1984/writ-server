import BaseLogic from './base.logic';
import Repository from '../repository';

class GenreLogic extends BaseLogic {
  static model() {
    return Repository.GenreRepository.model();
  }

  static async get(id) {
    return await Repository.GenreRepository.get(id, GenreLogic.model());
  }

  static async create(data) {
    return await Repository.GenreRepository.create(data, GenreLogic.model());
  }

  static async iCreate(data, name = '') {
    return await Repository.GenreRepository.iCreate({ name }, data, GenreLogic.model());
  }

  static async update(id, data) {
    return await Repository.GenreRepository.update(id, data, GenreLogic.model());
  }

  static async list(page=1, limit=10, where={}, include=null, options={}) {
    return await Repository.GenreRepository.list(GenreLogic.model(), '/genres/', page, limit, where, include, options);
  }
}

export default GenreLogic;
