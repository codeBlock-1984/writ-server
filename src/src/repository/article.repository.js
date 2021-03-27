import db from '../db/models';
import BaseRepository from './base.repository';

class ArticleRepository extends BaseRepository {
  static model() {
    const name = 'articles';
    return db[name];
  }

  static async create(data) {
    const { tags, ...rest } = data;
    return await db.sequelize.transaction(async t => {
      const article = await db.articles.create({ ...rest }, { raw: true, transaction: t });
      for (const i of tags) {
        await db.articletags.create({ tagid: i, articleid: article.id }, { transaction: t });
      }
      return article;
    });
  }

}

export default ArticleRepository;
