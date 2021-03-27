import Helper from '../helpers';

class ValidatorUtil {
  static type(type, val, check=false) {
    let res = false;

    if (type === Helper.dataTypes.string) {
      if (typeof val === 'string') {
        res = true;
        if (check && !val.replace(/ /g, '').length) {
          res = false;
        }
      }
    }

    if (type === Helper.dataTypes.number) {
      if (typeof val === 'number') {
        res = true;
        if (check && val <= 0) {
          res = false;
        }
      }
    }

    if (type === Helper.dataTypes.boolean) {
      if (typeof val === 'boolean') {
        res = true;
        if (check && val === false) {
          res = false;
        }
      }
    }

    return res;
  }
}

export default ValidatorUtil;
