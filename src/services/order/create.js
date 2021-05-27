const yup = require('yup');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { orderRepository, companyRepository } = require('../../repositories');

module.exports = async (person, body) => {
  const schema = yup.object().shape({
    company: yup.array(yup.number().integer()).required().min(1),
  });

  const validated = await schema.validate(body, { stripUnknown: true });

  const company = await companyRepository.list({
    where: {
      id: {
        [Op.in]: validated.company,
      },
    },
  });

  if (company.rows.length !== validated.company.length) {
    const missing = validated.company.filter(
      (book) => !company.rows.some((row) => row.getDataValue('id') === book),
    );

    throw {
      status: StatusCodes.NOT_FOUND,
      msg: missing.map((item) => `${item}-is-missing-or-not-exists`),
    };
  }

  return orderRepository.bulkCreate(
    company.rows.map((book) => ({
      personId: person,
      bookId: book.getDataValue('id'),
    })),
  );
};
