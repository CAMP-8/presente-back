const { Company } = require('../models');

module.exports = {
  create: (company) => Company.create(company),
  list: (query) => Company.findAndCountAll(query),
  findOne: (query) => Company.findOne(query),
  findById: (id) => Company.findByPk(id),
  delete: (id) =>
  Company.destroy({
      where: { id },
    }),
  update: (updated) => updated.save(),
};
