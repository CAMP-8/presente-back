const { Tutor } = require('../models');
const { Student } = require('../models');
const { Company  } = require('../models');

module.exports = {
  create: (tutor) => Tutor.create(tutor),
  list: (query) => Tutor.findAndCountAll(query),
  findOne: (query) => Tutor.findOne(query),
  findById: (id, options) => Tutor.findByPk(id, options),
  delete: (query) => Tutor.destroy(query),
  update: (updated) => updated.save(),

  create: (student) => Student.create(student),
  list: (query) => Student.findAndCountAll(query),
  findOne: (query) => Student.findOne(query),
  findById: (id, options) => Student.findByPk(id, options),
  delete: (query) => Student.destroy(query),
  update: (updated) => updated.save(),


 create: (company) => Company.create(company),
  list: (query) => Company.findAndCountAll(query),
  findOne: (query) => Company.findOne(query),
  findById: (id, options) => Company.findByPk(id, options),
  delete: (query) => Company.destroy(query),
  update: (updated) => updated.save(),
};
