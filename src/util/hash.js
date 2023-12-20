const bcrypt = require('bcrypt');

class HashManager {
  constructor() {}
  createHash(password) {
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return passwordHash;
  }
  isValidPassword(user, password) {
    const validation = bcrypt.compareSync(password, user.password);
    return validation;
  }
}

module.exports = HashManager;
