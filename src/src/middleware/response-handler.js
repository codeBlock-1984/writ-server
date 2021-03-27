class ResponseHandler {
  static async send(req, res) {
    const data = { requestId: res.locals.requestId, ...res.locals.data };
    return res.status(data.status).json(data);
  }
}

export default ResponseHandler;
