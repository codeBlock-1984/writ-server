import BaseLogic from './base.logic';
import Repository from '../repository';

class ClientLogic extends BaseLogic {
  static model() {
    return Repository.ClientRepository.model();
  }

  static async get(id) {
    return await Repository.ClientRepository.get(id, ClientLogic.model());
  }

  static async create(data) {
    return await Repository.ClientRepository.create(data, ClientLogic.model());
  }

  static async iCreate(data, name = '') {
    return await Repository.ClientRepository.iCreate({ name }, data, ClientLogic.model());
  }

  static async update(id, data) {
    return await Repository.ClientRepository.update(id, data, ClientLogic.model());
  }

  static async list(page=1, limit=10, where={}, include=null, options={}) {
    return await Repository.ClientRepository.list(ClientLogic.model(), '/clients/', page, limit, where, include, options);
  }
}

export default ClientLogic;
