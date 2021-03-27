import BaseEntity from './base.entity';

class GenreEntity extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
  }
}

export default GenreEntity;
