'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PhotoAlbums', [
      {
        name: 'Фотоальбом',
        img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фотоальбом1',
        img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фотоальбом2',
        img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhotoAlbums', null, {});
  },
};
