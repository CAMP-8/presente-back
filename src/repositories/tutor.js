const { Tutor } = require('../models');

module.exports = {
  create: (tutor) => Tutor.create(tutor),
  list: (query) => Tutor.findAndCountAll(query),
  findOne: (query) => Tutor.findOne(query),
  findById: (id, options) => Tutor.findByPk(id, options),
  delete: (query) => Tutor.destroy(query),
  update: (updated) => updated.save(),
};
