'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Locations', [
        {
       name: 'Санкт-Петербург',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Москва',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Екатеринбург',
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Locations', null, {});
     
  }
};
