const bcrypt = require("bcrypt");

module.exports.encryptor = {
  hashPassword: (password) => bcrypt.hash(password, 8),
  comparePassword: (password, userPassword) =>
    bcrypt.compare(password, userPassword),
};
