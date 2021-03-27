import db from '../db/models';
import BaseRepository from './base.repository';

class GenreRepository extends BaseRepository {
  static model() {
    const name = 'genres';
    return db[name];
  }

}

export default GenreRepository;
