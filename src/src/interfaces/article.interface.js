import Entity from '../entity';
import Helper from '../helpers';

const articleInterface = new Entity.ArticleEntity(
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.number,
  Helper.dataTypes.number,
  Helper.dataTypes.array,
);

export default articleInterface;
