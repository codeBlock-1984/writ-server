import BaseLogic from './base.logic';
import Repository from '../repository';
import Service from '../services';

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
    return result.data;
  }
}

export default AuthLogic;
