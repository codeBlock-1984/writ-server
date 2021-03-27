import db from '../db/models';
import BaseRepository from './base.repository';

class AuthRepository extends BaseRepository {
  static model() {
    const name = 'users';
    return db[name];
  }

  static async register(data) {
    const { user: { clientid, id: userauthid, ...rest } } = data;
    return await db.sequelize.transaction(async t => {
      const user = await db.users.create({ userauthid, ...rest }, { raw: true, transaction: t });
      await db.clientusers.create({ clientid, userid: user.id }, { raw: true, transaction: t });
      return user;
    });
  }

}

export default AuthRepository;
