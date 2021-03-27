import Helper from '../helpers';
import Util from '../utils';

class BaseController {
  static success(status, message, data) {
    return Helper.Response.success(status, message, data);
  }

  static failure(status, message, data = null) {
    return Helper.Response.failure(status, message, data);
  }

  static parseUpdateData(entity, data) {
    const parsed = {};
    const fields = Object.keys(entity);

    for (let field of fields) {
      if (Util.ValidatorUtil.type(entity[field], data[field])) {
        parsed[field] = data[field];
      }
    }
    return parsed;
  }
}

export default BaseController;
