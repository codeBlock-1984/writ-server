import Helper from '../helpers';

class BaseEntity {
  constructor() {
    this.recordstatus = Helper.dataTypes.number;
    this.updatedat = Helper.dataTypes.timestamp;
    this.createdat = Helper.dataTypes.timestamp;
  }
}

export default BaseEntity;
