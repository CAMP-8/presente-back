const yup = require('yup');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const jsonwebtoken = require('jsonwebtoken');
const { tutorRepository } = require('../../repositories');
const { companyRepository } = require('../../repositories');
const { studentRepository } = require('../../repositories');
const { ERRORS } = require('../../utils');

module.exports = async (body) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  const tutor = await tutorRepository.findOne({
    where: { email: validated.email },
  });
  const company = await companyRepository.findOne({
    where: { email: validated.email },
  });
  const student = await studentRepository.findOne({
    where: { email: validated.email },
  });

  if (!tutor && !student && !company) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      msg: ERRORS.accessUnauthorized,
    };
  }

  if (!bcrypt.compareSync(validated.password, tutor.getDataValue('password'))) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      msg: ERRORS.accessUnauthorized,
    };
  }

  if (!bcrypt.compareSync(validated.password, student.getDataValue('password'))) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      msg: ERRORS.accessUnauthorized,
    };
  }

  if (!bcrypt.compareSync(validated.password, company.getDataValue('password'))) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      msg: ERRORS.accessUnauthorized,
    };
  }

  const token = jsonwebtoken.sign(
    { id: tutor.getDataValue('id') },
    process.env.JWT_SECRET,
  );

  tutor.setDataValue('token', token);

  await tutorRepository.update(tutor);

  return {
    tutor,
    student,
    company,
    token,
  };
};
