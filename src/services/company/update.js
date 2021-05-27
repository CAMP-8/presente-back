const yup = require('yup');
const { StatusCodes } = require('http-status-codes');
const { companyRepository } = require('../../repositories');
const { ERRORS } = require('../../utils');

module.exports = async (id, body) => {
  const company = await companyRepository.findById(id);

  if (!company) {
    throw {
      status: StatusCodes.NOT_FOUND,
      msg: ERRORS.notFound('company'),
    };
  }

  const schema = yup.object().shape({
    name: yup.string(),
    authorName: yup.string(),
    category: yup.string(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  Object.keys(validated).forEach((key) => {
    company.setDataValue(key, validated[key]);
  });

  return companyRepository.update(company);
};
