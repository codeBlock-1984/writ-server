import db from '../db/models';
import BaseRepository from './base.repository';

class ArticleRepository extends BaseRepository {
  static model() {
    const name = 'articles';
    return db[name];
  }

  static async getBySlug(slug) {
    const data = await db.articles.findOne({ where: { slug }, raw: true, options: { } });
    const tags = await db.articletags.findAll({ where: { articleid: data.id }, raw: true, include: { model: db.tags } });
    return { ...data, tags };
  }

  static async create(data) {
    const { tags, ...rest } = data;
    return await db.sequelize.transaction(async t => {
      const article = await db.articles.create({ ...rest }, { raw: true, transaction: t });
      for (const i of tags) {
        const tag = await db.tags.findOne({ where: { name: i }, raw: true, options: {} });
        await db.articletags.create({ tagid: tag.id, articleid: article.id }, { transaction: t });
      }
      return article;
    });
  }

  static async update(id, data) {
    const { tags, ...rest } = data;
    return await db.sequelize.transaction(async t => {
      await db.articles.update({ ...rest }, { where: { id }, raw: true, transaction: t });
      await db.articletags.destroy({
        where: {
          articleid: id
        },
        transaction: t
      });

      for (const i of tags) {
        const tag = await db.tags.findOne({ where: { name: i }, raw: true, transaction: t, options: {} });
        await db.articletags.create({ tagid: tag.id, articleid: id }, { transaction: t });
      }

      const article = await db.articles.findOne({ where: { id }, raw: true, transaction: t, options: {} });
      return article;
    });
  }

  static async search(query) {
    return await db.articles.findAll({
      where: {
        title: {
          [db.Sequelize.Op.iLike]: `${query}%` 
        }
      },
      limit: 10
    });
  }

}

export default ArticleRepository;
