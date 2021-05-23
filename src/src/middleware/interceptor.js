import Helper from '../helpers';
import Util from '../utils';

class Interceptor {
  static async pathError(req, res, next) {
    if (!res.locals.data) res.locals.data = Helper.Response.failure(404, 'The requested path does not exist');
    return next();
  }

  static async worker(req, res, next) {
    res.locals.requestId = Util.StringUtil.generateUUID();
    if (res.locals.error) {
      const error = res.locals.error;
      console.trace(error);
      if (error.stack) console.log(error.stack);
    }
    return next();
  }
}

export default Interceptor;
