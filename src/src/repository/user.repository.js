import db from '../db/models';
import BaseRepository from './base.repository';

class UserRepository extends BaseRepository {
  static model() {
    const name = 'users';
    return db[name];
  }

  static async getByAuth(id, model) {
    return await model.findOne({ where: { userauthid: id }, raw: true, options: {} });
  }
}

export default UserRepository;
