const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { messages } = require("../../helpers");
const { constants } = require("../../utils");
const { usersRepository } = require("../../repositories");
const { promisify } = require("util");
const bcrypt = require("bcrypt");


module.exports.signin = async (email, password) => {
  const user = await usersRepository.get({ where: { email } });

  if (!user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound,
    };
  }

  const valid = bcrypt.compareSync(password, user.getDataValue('password'));
  console.log(bcrypt.hashSync(password, 8));
  console.log(valid, password, user.password);
  if (!valid) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      message: messages.invalidPassword,
    };
  }

  const payload = {
    id: user.id,
    email: user.email,
    
   
  };

  const sign = promisify(jwt.sign);
  const token = await sign(payload, constants.jwtToken);
  user.setDataValue('token', token);
  await usersRepository.update(user);

  return { email, token, name: user.name, interests: user.interests};
  
};
