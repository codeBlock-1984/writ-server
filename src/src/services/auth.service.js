import Helper from '../helpers';

const auth_server_url = process.env.AUTH_SERVER_URL;
const makeRequest = new Helper.MakeRequest(auth_server_url);

class AuthService {
  static async register(data) {
    const result = await makeRequest.send('register', 'POST', data);
    return result;
  }

  static async login(data) {
    const result = await makeRequest.send('login', 'POST', data);
    return result;
  }

  static async verify(token) {
    const result = await makeRequest.send('verify', 'POST', { token });
    return result;
  }
}

export default AuthService;
