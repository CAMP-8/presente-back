const yup = require('yup');
const { StatusCodes } = require('http-status-codes');
const { companyRepository } = require('../../repositories');
const { ERRORS } = require('../../utils');

module.exports = async (body) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    authorName: yup.string().required(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  const company = await companysRepository.findOne({
    where: {
      name: validated.name,
    },
  });

  if (company) {
    throw {
      status: StatusCodes.CONFLICT,
      msg: ERRORS.alreadtExists('company'),
    };
  }

  return companyRepository.create(validated);
};
