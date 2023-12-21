'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ways', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      routeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Routes',
          key: 'id',
        },
      },
      path: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      coordinateLatitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      coordinateLongitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ways');
  },
};
