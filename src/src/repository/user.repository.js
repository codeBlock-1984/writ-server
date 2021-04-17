import db from '../db/models';
import BaseRepository from './base.repository';

class UserRepository extends BaseRepository {
  static model() {
    const name = 'users';
    return db[name];
  }

}

export default UserRepository;
