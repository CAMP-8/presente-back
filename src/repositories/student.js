const { Student } = require('../models');

module.exports = {
  create: (student) => Student.create(student),
  list: (query) => Student.findAndCountAll(query),
  findOne: (query) => Student.findOne(query),
  findById: (id, options) => Student.findByPk(id, options),
  delete: (query) => Student.destroy(query),
  update: (updated) => updated.save(),
};
