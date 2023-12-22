const { putt } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Routes', [
      {
        name: 'Финляндский вокзал - Львы Ши-Цза.',
        rout: 'Финляндский вокзал → Паровоз Ленина → Поющие фонтаны → Сампсониевский мост → Крейсер Аврора → Домик Петра I → Львы Ши-Цза.',
        img: 'https://static.spaser.pw/petersburg/__what_and_where/monuments/Lions_Chi/1.jpg',
        description: 'Путь огонь честно говоря',
        locationId: 1,
        optionId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Иоанновский мост - Биржевой мост.',
        rout: 'Иоанновский мост → Памятник Зайцу → Петропавловская крепость → Корабль Летучий Голландец → Биржевой мост.',
        img: 'http://s1.fotokto.ru/photo/full/643/6430451.jpg',
        description: 'На разок сойдет',
        locationId: 1,
        optionId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дворцовая набережная - Триумфальная арка Главного штаба.',
        rout: 'Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://lh3.googleusercontent.com/p/AF1QipPmgt6pLGpscbVzqRaxK8Pk0HGv9WWw8ED_KOgc=s1360-w1360-h1020',
        description: 'Ну пойдет',
        locationId: 1,
        optionId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ПО ЦЕНТРУ МОСКВЫ',
        rout: 'Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://n1s1.hsmedia.ru/ba/cc/69/bacc691045a76c01d356ffebd8fe4165/728x500_1_e836c943bec0f3a633ff47e5e3ae5c7c@940x646_0xc35dbb80_13885033961497609946.jpeg',
        description: 'Ну пойдет',
        locationId: 2,
        optionId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ШУМНЫЕ УЛИЦЫ И БУЛЬВАРЫ МОСКВЫ',
        rout: 'Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://n1s1.hsmedia.ru/d2/51/b3/d251b366684728e7ad3633bb38db2a7d/728x486_1_5cedb4977caafb1f30898b0632dd330f@940x627_0xc35dbb80_2699177401497610632.jpeg',
        description: 'Ну пойдет',
        locationId: 2,
        optionId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Исторический сквер',
        rout: 'Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://img.tourister.ru/files/2/5/7/0/2/3/9/6/clones/728_484_fixedwidth.jpg?t=1703241599592',
        description: 'Ну пойдет',
        locationId: 3,
        optionId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дом Севастьянова',
        rout: 'Дворцовая набережная → Зимняя Канавка → Дворцовая площадь → Зимний дворец → Александровская колонна → Триумфальная арка Главного штаба.',
        img: 'https://img.tourister.ru/files/2/5/7/0/2/3/9/4/clones/728_484_fixedwidth.jpg?t=1703241599592',
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
