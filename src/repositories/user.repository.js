const { User } = require("../models");

module.exports = {
  list: (query) => User.findAndCountAll(query),
  getById: (id) => user.findByPk(id),
  get: (params) => User.findOne(params),
  create: (params) => User.create(params),
  update: (user) => user.save(),
  destroy: (id) => User.destroy({ where: { id } }),
};
