const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

class Tutor extends Model {}
Tutor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    graduation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workplace: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
        
   
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Tutor',
    underscored: true,
    tableName: 'people',
    paranoid: true,
  },
);

Person.prototype.toJSON = function toJSON() {
  const values = this.get();

  delete values.password;
  delete values.token;

  return values;
};

module.exports = Tutor;
