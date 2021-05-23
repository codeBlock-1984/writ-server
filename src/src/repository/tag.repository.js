import db from '../db/models';
import BaseRepository from './base.repository';

class TagRepository extends BaseRepository {
  static model() {
    const name = 'tags';
    return db[name];
  }

  static async search(query) {
    return await db.tags.findAll({
      where: {
        name: {
          [db.Sequelize.Op.iLike]: `${query}%` 
        }
      }
    });
  }

}

export default TagRepository;
