import BaseEntity from './base.entity';

class ClientEntity extends BaseEntity {
  constructor(name) {
    super();
    this.name = name;
  }
}

export default ClientEntity;
