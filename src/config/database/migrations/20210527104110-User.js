'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('users', { 
       id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
       }, 
       name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      graduation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      interests: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexualOrientation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_admin:{
        type:Sequelize.BOOLEAN,
        default: false,
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        /**registration_type: Sequelize.ENUM('email', 'google', 'facebook'),**/
        allowNull: false,
      },
      locationState: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      locationCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
                
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      }, 
      
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('users');
     
  }
};
