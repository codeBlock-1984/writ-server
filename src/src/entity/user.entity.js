import BaseEntity from './base.entity';

class UserEntity extends BaseEntity {
  constructor(userauthid, firstname, lastname, username, email, phone, profilepic, isverifiedemail, isverifiedphone) {
    super();
    this.userauthid = userauthid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.profilepic = profilepic;
    this.isverifiedemail = isverifiedemail;
    this.isverifiedphone = isverifiedphone;
  }
}

export default UserEntity;
