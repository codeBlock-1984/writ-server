import db from '../db/models';
import BaseRepository from './base.repository';

class TagRepository extends BaseRepository {
  static model() {
    const name = 'tags';
    return db[name];
  }

}

export default TagRepository;
