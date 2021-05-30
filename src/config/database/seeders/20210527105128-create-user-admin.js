'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Adminisitrador",
        email: "matheusmeka01@gmail.com",
        password:
          "12341234",
        is_admin: true,
        birthday: "1995-11-20",
        graduation: "Ciência da computação",
        about: "testando o seed",
        interests: ["Backend","Frontend"],
        gender: "Masculino",
        race: "Parda",
        sexualOrientation: "Heterossexual",
        locationState: "MG",
        locationCity: "Belo Horizonte",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
