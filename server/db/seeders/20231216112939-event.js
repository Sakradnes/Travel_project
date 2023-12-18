'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {},

  async down(queryInterface, Sequelize) {
    await event.bulckCreate([
      {
        name: 'Выставка «Горел асфальт» в Эрарте 6+',
        date: '28 сентября 2023 – 28 января 2024 пн, ср–вс 11:00–23:00',
        img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
        description:
          'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
        locationId: 1,
      },
    ]);
  },
};