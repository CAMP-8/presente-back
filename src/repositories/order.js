const { Tutorbycompany } = require('../models');

module.exports = {
  create: (order) => Tutorbycompany.create(order),
  findOne: (query) => Tutorbycompany.findOne(query),
  bulkCreate: (items) => Tutorbycompany.bulkCreate(items),
};
