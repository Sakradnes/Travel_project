'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Санкт-Петербург',
          coordinateLatitude: 59.9406745082569859,
          coordinateLongitude: 30.32483968687088,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Москва',
          coordinateLatitude: 55.75446770983755,
          coordinateLongitude: 37.61915704575877,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Екатеринбург',
          coordinateLatitude: 56.82669990388489,
          coordinateLongitude: 60.60964801953118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
