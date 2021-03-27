class Success {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

class Failure {
  constructor(status, message, error=null) {
    this.status = status;
    this.message = message;
    this.error = error;
  }
}

const types = {
  Success,
  Failure
};

export default types;
