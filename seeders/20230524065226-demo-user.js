'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          "id": 1,
          "name": "Joellyn Stockoe",
          "user_name": "jstockoe0",
          "email": "jstockoe0@netscape.com",
          "password": "otTMaP",
          "dob": "2022-08-29",
          "status": "disabled"
        },
        {
          "id": 2,
          "name": "Nonah Putley",
          "user_name": "nputley1",
          "email": "nputley1@thetimes.co.uk",
          "password": "90MY8kWY",
          "dob": "2022-11-28",
          "status": "active"
        },
      
      ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
