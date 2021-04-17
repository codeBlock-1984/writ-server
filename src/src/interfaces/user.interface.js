import Entity from '../entity';
import Helper from '../helpers';

const userInterface = new Entity.UserEntity(
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.string,
  Helper.dataTypes.boolean,
  Helper.dataTypes.boolean
);

export default userInterface;
