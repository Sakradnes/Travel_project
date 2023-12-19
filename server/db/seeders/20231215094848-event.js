'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Events',
      [
        {
          name: 'Выставка «Горел асфальт» в Эрарте 6+',
          date: '2023-12-23',
          img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          description:
            'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Выставка пуп',
          date: '2023-12-19',
          img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          description:
            'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Выставка 3',
          date: '2023-12-25',
          img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          description:
            'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Выставка 4',
          date: '2023-12-28',
          img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          description:
            'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Выставка 5',
          date: '2023-12-20',
          img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          description:
            'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
