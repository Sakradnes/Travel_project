const { putt } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Routes', [
      {
        name: '1. Финляндский вокзал → Паровоз Ленина → Поющие фонтаны → Сампсониевский мост → Крейсер Аврора → Домик Петра I → Львы Ши-Цза.',
        img: 'https://static.spaser.pw/petersburg/__what_and_where/monuments/Lions_Chi/1.jpg',
        description: 'Путь огонь честно говоря',
        locationId: 1,
        optionId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2. Иоанновский мост → Памятник Зайцу → Петропавловская крепость → Корабль Летучий Голландец → Биржевой мост.',
        img: 'http://s1.fotokto.ru/photo/full/643/6430451.jpg',
        description: 'На разок сойдет',
        locationId: 2,
        optionId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3. Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://lh3.googleusercontent.com/p/AF1QipPmgt6pLGpscbVzqRaxK8Pk0HGv9WWw8ED_KOgc=s1360-w1360-h1020',
        description: 'Ну пойдет',
        locationId: 3,
        optionId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  },
};
