import db from '../db/models';
import BaseRepository from './base.repository';

class ClientRepository extends BaseRepository {
  static model() {
    const name = 'clients';
    return db[name];
  }

}

export default ClientRepository;
