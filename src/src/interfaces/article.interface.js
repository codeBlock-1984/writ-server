import Entity from '../entity';
import Helper from '../helpers';

const articleInterface = new Entity.ArticleEntity(
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.number
);

export default articleInterface;
