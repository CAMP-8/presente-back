const Sequelize = require('sequelize');
const config = require('../config/database/sequelize');
const Student = require('./student');
const Company = require('./company');
const Tutor = require('./tutor');
const TutorbyCompany = require('./tutorbycompany');

Company.belongsToMany(Person, { through: TutorbyCompany, foreignKey: 'companyId' });
Tutor.belongsToMany(Company, {
  through: TutorbyCompany,
  foreignKey: 'tutorId',
  as: 'company',
});

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

module.exports = {
  sequelize,
  Company,
  Tutor,
  Student,
};
