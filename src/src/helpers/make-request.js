import fetch from 'node-fetch';

class MakeRequest {
  constructor(base='', headers={}, options={}) {
    this.base = base;
    this.headers = headers;
    this.options = options;
  }

  async send(path, method='GET', body=null, headers={ 'Content-Type': 'application/json' }, options={}) {
    let url = `${this.base}${path}`;
    if (body) this.options = { ...this.options, body: JSON.stringify(body) };
    this.headers = { ...this.headers, ...headers };
    this.options = { ...this.options, ...options, method, headers: this.headers };
    const response = (await fetch(url, this.options)).json();
    return response;
  }
}

export default MakeRequest;
