import BaseLogic from './base.logic';
import Repository from '../repository';
import Service from '../services';
import UserLogic from './user.logic';

class AuthLogic extends BaseLogic {
  static model() {
    return Repository.AuthRepository.model();
  }

  static async register(data) {
    const result = await Service.AuthService.register(data);
    if (result.status !== 201) throw new Error('User signup failed');
    const user = await Repository.AuthRepository.register(result.data);
    return { user, token: result.data.token };
  }

  static async login(data) {
    const result = await Service.AuthService.login(data);
    if (result.status !== 200) throw new Error('User login failed');
    const res = await UserLogic.list(1, 1, { userauthid: result.data.user.id });
    const user = res.records[0];
    result.data.user = user;
    return result.data;
  }

  static async verify(token) {
    const result = await Service.AuthService.verify(token);
    if (result.status !== 200) throw new Error('Token verification failed');
    const user = await UserLogic.getByAuth(result.data.id);
    result.data = { ...result.data, id: user.id };
    return result.data;
  }
}

export default AuthLogic;
