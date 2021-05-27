const { Model, Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database/sequelize');

class Company extends Model {}
Company.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companySize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    areas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Company',
    underscored: true,
    tableName: 'company',
    paranoid: true,
  },
);

module.exports = Company;
