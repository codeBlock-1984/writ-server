import { v4 as uuidv4 } from 'uuid';
import cryptoRandomString from 'crypto-random-string';

class StringUtil {
  static generateUUID() {
    return uuidv4();
  }

  static randomString(length, type) {
    return cryptoRandomString({ length, type });
  }
}

export default StringUtil;
