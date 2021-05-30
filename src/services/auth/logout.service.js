const { usersRepository } = require("../../repositories");  

module.exports.logout = async (email) => {
  const user = await usersRepository.get({ where: { email } });

  user.setDataValue('token', null);

  return usersRepository.update(user);
}