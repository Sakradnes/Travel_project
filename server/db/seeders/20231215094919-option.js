'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Options', [
      { type: 'Пеший', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Машина', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Мотоцикл', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Options', null, {});
  },
};
