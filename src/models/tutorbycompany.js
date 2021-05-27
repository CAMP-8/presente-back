const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

const Company = require('./company');
const Tutor = require('./tutor');

class TutorbyCompany extends Model {}
TutorbyCompany.init(
  {
    tutorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tutor,
        key: 'id',
      },
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'id',
      },
    },
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Tutorbycompany',
    underscored: true,
    paranoid: true,
    tableName: 'Tutor_by_books',
  },
);

module.exports = TutorbyCompany;
