const { StatusCodes } = require('http-status-codes');
const { companyRepository } = require('../../repositories');
const { ERRORS } = require('../../utils');

module.exports = async (id) => {
  const company = await companyRepository.findById(id);

  if (!company) {
    throw {
      status: StatusCodes.NOT_FOUND,
      msg: ERRORS.notFound('company'),
    };
  }

  return company;
};
