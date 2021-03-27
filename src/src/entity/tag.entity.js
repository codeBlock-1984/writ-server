import BaseEntity from './base.entity';

class TagEntity extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
  }
}

export default TagEntity;
