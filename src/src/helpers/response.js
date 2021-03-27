import types from './response-types';

const { Success, Failure } = types;

class Response {
  static success(status, message, data) {
    return new Success(status, message, data);
  }

  static failure(status, message, data = null) {
    return new Failure(status, message, data);
  }
}

export default Response;
